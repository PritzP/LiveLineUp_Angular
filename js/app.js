var app = angular.module('insertLiveStream', []);



app.controller('ListOfLineUpsController', ['$scope', 'getLiveList', function($scope, getLiveList) {

  getLiveList.getList().then(function (data) {
    $scope.artists = data.data;
  });

}]);


app.directive('artistList', function() {
  return {
    restrict: 'A',
    templateUrl: 'partials/lists.html',
    scope: {
      artists: '='
    }
  }
});

app.directive('event', function() {
  return {
    restrict: 'A',
    link: function($scope, $element, $attr){
		setInterval(function() {
			var start = $attr.start;
			var end = $attr.end;
			if (checkTime(start, end)){
				$element.addClass('on_now');
				$element.removeClass('not_on_now');
			} else {
				$element.removeClass('on_now');
				$element.addClass('not_on_now');
			}
		},1000);
	}
  }
});


app.factory("getLiveList", ["$http", function ($http) {
   return {
     getList: function(){
        var url = "public/list.json";
        var request = $http({
            method: 'GET',
            dataType: "json",
            url: url,
            cache: false
        });
         
        return request;
     },
	 setCurrentEvent: function(){
	
	 }
  } 
}]);


app.filter("dateformatter", function($filter){
  // this should return 'yyyy-MM-dd h:mm:ss'
  return function(dt) {
    var date = new Date(dt);
    return date
  }
})
