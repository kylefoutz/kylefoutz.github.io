// forecast
var openWeatherMapId = 'ab81f4bbe5f7e403385ffa4637cd68f5'; // place your OpenWeatherMap id between the single quotes
var cityIdP = '5604473'; // place the city id between the single quotes (e.g. 5604473 for Preston)

var apiForecastUrlP = 'https://api.openweathermap.org/data/2.5/forecast' +
    '?id=' + cityIdP + 
    '&appid=' + openWeatherMapId +
    '&units=imperial';

var forecastRequestP = new XMLHttpRequest();
forecastRequestP.open('GET', apiForecastUrlP, true);
forecastRequestP.responseType = 'json';
forecastRequestP.send();

forecastRequestP.onload = function () {
    var forecastDataP = forecastRequestP.response;
    
    // create variables to use in the loop below
    var j = 1;
    var forecastDateP;
    var forecastTempP;

    for (i = 0; i < forecastDataP.list.length; i++)
    {
        // look for forecasts for 21:00:00
        if (forecastDataP.list[i].dt_txt.includes('21:00:00')) {
            // set date variable
            forecastDateP = new Date(forecastDataP.list[i].dt_txt);
            
            // set temperature variable
            forecastTempP = forecastDataP.list[i].main.temp.toFixed();
            
            switch (j) {
                case 1:
                    document.getElementById("day1Name").innerHTML = getDayOfWeek(forecastDateP);
                    document.getElementById("day1TempP").innerHTML = forecastTempP;
                    break;
                case 2:
                    document.getElementById("day2Name").innerHTML = getDayOfWeek(forecastDateP);
                    document.getElementById("day2TempP").innerHTML = forecastTempP;
                    break;
                case 3:
                    document.getElementById("day3Name").innerHTML = getDayOfWeek(forecastDateP);
                    document.getElementById("day3TempP").innerHTML = forecastTempP;
                    break;
                case 4:
                    document.getElementById("day4Name").innerHTML = getDayOfWeek(forecastDateP);
                    document.getElementById("day4TempP").innerHTML = forecastTempP;
                    break;
                case 5:
                    document.getElementById("day5Name").innerHTML = getDayOfWeek(forecastDateP);
                    document.getElementById("day5TempP").innerHTML = forecastTempP;
                    break;
            }

            // increment j by 1
            j++;
        }
    }
}
    
function getDayOfWeek(forecastDateP) {
    // day of week
    var dayOfWeekNumber = forecastDateP.getDay();

    var dayNames = new Array(7);
    dayNames[0] = 'Sunday';
    dayNames[1] = 'Monday';
    dayNames[2] = 'Tuesday';
    dayNames[3] = 'Wednesday';
    dayNames[4] = 'Thursdsay';
    dayNames[5] = 'Friday';
    dayNames[6] = 'Saturday';

    return dayNames[dayOfWeekNumber];
}
