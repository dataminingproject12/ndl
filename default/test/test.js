Module.register("test", {
  defaults: {},
  getStyles: function () {
		return ["test.css"];
},
getScripts: function () {
		return ["moment.js"];
	},

  start: function() {

	    this.updateDom();
	  
  },
  getDom: function() {
	
	var date = new Date();
	this.day = date.getDate();
        this.month = date.getMonth();
        this.year = date.getFullYear();
	var months = ["January","February","March","April","May",
			"June","July","August","September",
			"October","November","December"
		      ]
	var startingDay = moment().date(1).weekday();
	var monthLength = new Date(this.year,this.month,0).getDate();
	var day_of_week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");

  	var this_month = new Date(this.year, this.month, 1);
        var next_month = new Date(this.year, this.month + 1, 1);
	var first_week_day = this_month.getDay();
        var days_in_this_month = Math.round((next_month.getTime() - this_month.getTime()) / (1000 * 60 * 60 * 24));


	
	
	var employees = [
			{ a: 1,b: 2,c: 3},
			{ a: 1,b: 2,c: 3},
			{ a: 1,b: 2,c: 3},
			{ a: 1,b: 2,c: 3}
			]
	//var headers = months[this.month];
		let table = document.createElement('table');
		var headerRow = document.createElement('tr');
		//headers.forEach(headerText => {
		var header = document.createElement('th');
		//header.innerHTML = months[this.month];
		var textNode = document.createTextNode(months[this.month]+ " " + this.year);

		header.appendChild(textNode);
		headerRow.appendChild(header);
		//});
		table.appendChild(headerRow);
		
		var headerRow1 = document.createElement('tr');
		day_of_week.forEach(headerText => {
			var header1 = document.createElement('th');
			//header1.innerHTML = months[this.month];
			var textNode1 = document.createTextNode(headerText);

			header1.appendChild(textNode1);
			headerRow1.appendChild(header1);
		});
		table.appendChild(headerRow1);
		
		 var bodyContent = document.createElement("tBody");
   		 var bodyTR = document.createElement("tr");
   		 bodyTR.className = "weekRow";

   		 // Fill in the days
   		 var day = 1;
   		 var nextMonth = 1;
   		 // Loop for amount of weeks (as rows)
   		 for (var i = 0; i < 9; i++) {
   			 // Loop for each weekday (as individual cells)
   			 for (var j = 0; j <= 6; j++) {
   				 var bodyTD = document.createElement("td");
   				 bodyTD.className = "calendar-day";
   				 var squareDiv = document.createElement("div");
   				 squareDiv.className = "square-box";
   				 var squareContent = document.createElement("div");
   				 squareContent.className = "square-content";
   				 var squareContentInner = document.createElement("div");
   				 var innerSpan = document.createElement("span");

   				 if (j < startingDay && i == 0) {
   					 // First row, fill in empty slots
   					 innerSpan.className = "monthPrev";
   					 innerSpan.innerHTML = moment().subtract(1, 'months').endOf('month').subtract((startingDay - 1) - j, 'days').date();
   				 } else if (day <= monthLength && (i > 0 || j >= startingDay)) {
   					 if (day == moment().date()) {
   						 innerSpan.id = "day" + day;
   						 innerSpan.className = "today";
   					 } else {
   						 innerSpan.id = "day" + day;
   						 innerSpan.className = "daily";
   					 }
   					 innerSpan.innerHTML = day;
   					 day++;
   				 } else if (day > monthLength && i > 0) {
   					 // Last row, fill in empty space
   					 innerSpan.className = "monthNext";
   					 innerSpan.innerHTML = moment([this.year, this.month, monthLength]).add(nextMonth, 'days').date();
   					 nextMonth++;
   				 }
   				 squareContentInner.appendChild(innerSpan);
   				 squareContent.appendChild(squareContentInner);
   				 squareDiv.appendChild(squareContent);
   				 bodyTD.appendChild(squareDiv);    
   				 bodyTR.appendChild(bodyTD);
   			 }
   			 // Don't need any more rows if we've run out of days
   			 if (day > monthLength) {
   				 break;
   			 } else {
   				 bodyTR.appendChild(bodyTD);
   				 bodyContent.appendChild(bodyTR);
   				 var bodyTR = document.createElement("tr");
   				 bodyTR.className = "weekRow";
   			 }
   		 }    

   		 bodyContent.appendChild(bodyTR);
   		 table.appendChild(bodyContent);


		/*employees.forEach(emp => {
			var row = document.createElement('tr');
			Object.values(emp).forEach(text => {
				var cell = document.createElement('td');
				var textNode = document.createTextNode(text);
				cell.appendChild(textNode);
				row.appendChild(cell);
			})
			table.appendChild(row);
		});*/
	
        return table;

}
});

