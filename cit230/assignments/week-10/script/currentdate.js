
var date = new Date();

var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
var dayOfWeek = weekday[date.getDay()];

var month = new Array(12);
    month[0] = "January";
    month[1] = "Febuary";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "Novemeber";
    month[11] = "December";
var thisMonth = month[date.getMonth()];

var theDay = dayOfWeek + ", " + date.getDate() + " " + thisMonth + " " + date.getFullYear();


document.getElementById("thedate").innerHTML = theDay;
document.getElementById('copyrightyear').innerHTML = date.getFullYear();