Module.register("clock", {
  defaults: {

},
  getStyles: function () {
		return ["clock.css"];
},
  start: function() {

	var timer = setInterval(()=>{
	    this.updateDom();
	  }, 1000);
    	
},
  getDom: function() {
	var time = new Date();
	var weekday = new Array(7);
	weekday[0] = "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";

	this.n = weekday[time.getDay()];
  	
	this.hour = time.getHours();
	this.min = time.getMinutes();
	this.sec = time.getSeconds();
	this.day = ("0" + time.getDate()).slice(-2);
	this.month = ("0" + (time.getMonth() + 1)).slice(-2);
	this.year = time.getFullYear();
	this.hour = this.hour < 10 ? "0" + this.hour : this.hour;
        this.min = this.min < 10 ? "0" + this.min : this.min;
        this.sec = this.sec < 10 ? "0" + this.sec : this.sec;
  
        this.currentTime = this.hour + ":" 
                + this.min;
	this.date = this.n + ", " + this.day + "." + this.month + "." + this.year;

	  const clockLook = document.createElement("div");
	  clockLook.id = "clockLook";
	  clockLook.className = "clockLook";
	  clockLook.innerHTML = this.currentTime;

	  var date = document.createElement("div");
	  date.id = "date";
	  date.className = "date";
	  date.innerHTML = this.date;
	  date.appendChild(clockLook);
	  return date;

}


});
