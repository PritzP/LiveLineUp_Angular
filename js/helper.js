$(function(){
	
	function checkTime(startdate, enddate) {
	    var d = new Date(); // current time
	    var hours = d.getHours();
	    var mins = d.getMinutes();
	    var day = d.getDay();
	    var month = d.getDay();
	    var year = d.getDay();

	    console.log(startdate)
	    return []
	    startdate = new Date(startdate);
	    enddate = new Date(enddate);



	    return startday >= startdate.getDay()
	        && day <= enddate.getDay()
	        && hours >= startdate.getHours() 
	        && hours <= enddate.getHours()  
	        && mins <= enddate.getMinutes();
	}

});