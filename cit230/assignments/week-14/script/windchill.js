var temp = 50;
var windSpeed = 10;
var tempDis = 65;
var windSpeedDis = 5;



var windChill = Math.round(35.74 + (0.6125 * temp)
     - (35.75 * Math.pow(windSpeed, 0.16))
     + (0.4275 * temp * Math.pow(windSpeed, 0.16)));

var windChillDis = Math.round(35.74 + (0.6125 * tempDis)
     - (35.75 * Math.pow(windSpeedDis, 0.16))
     + (0.4275 * tempDis * Math.pow(windSpeedDis, 0.16)));

document.getElementById('temperatureP').innerHTML = temp + '&deg;';
document.getElementById('windP').innerHTML = windSpeed + ' mph';
document.getElementById('windchillP').innerHTML = windChill + '&deg;';
document.getElementById('tempD').innerHTML = tempDis + '&deg;';
document.getElementById('windD').innerHTML = windSpeedDis + ' mph';
document.getElementById('windchillD').innerHTML = windChillDis + '&deg;';



