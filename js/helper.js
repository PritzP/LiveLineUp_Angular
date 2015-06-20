	function checkTime(startdate, enddate) {
	    var d = new Date(); // current time
		startdate = new Date(startdate);
	    enddate = new Date(enddate);
		
		var obj = {
			now: {
				day: d.getDay(),
				month: d.getMonth(),
				year: d.getFullYear(),
				hours: d.getHours(),
				minutes: d.getMinutes(),
				timeInt: d.getTime()
			},
			startdate: {
				day: startdate.getDay(),
				month: startdate.getMonth(),
				year: startdate.getFullYear(),
				hours: startdate.getHours(),
				minutes: startdate.getMinutes(),
				timeInt: startdate.getTime()
			},
			enddate: {
				day: enddate.getDay(),
				month: enddate.getMonth(),
				year: enddate.getFullYear(),
				hours: enddate.getHours(),
				minutes: enddate.getMinutes(),
				timeInt: enddate.getTime()
			}
		}
	    
	    startdate = new Date(startdate);
	    enddate = new Date(enddate); 
		
		return obj.now.timeInt >= obj.startdate.timeInt
				&& obj.now.timeInt <= obj.enddate.timeInt
	}