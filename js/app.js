var app = angular.module('insertLiveStream', []);



app.controller('ListOfLineUpsController', ['$scope', 'getLiveList', function($scope, getLiveList) {

  getLiveList.getList().then(function (data) {
    $scope.artists = data.data;
  });

}]);


app.directive('artistList', function() {
  return {
    restrict: 'A',
    templateUrl: '/partials/lists.html',
    scope: {
      artists: '='
    },
    link: function($scope, $element, $attr){
      console.log($element);
    }
  }
});


app.factory("getLiveList", ["$http" ,function ($http) {
   return {
     getList: function(){
        var url = "/public/list.json";
        var request = $http({
            method: 'GET',
            dataType: "json",
            url: url,
            cache: false
        });
         
        return request;
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
