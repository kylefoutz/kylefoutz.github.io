// forecast
var openWeatherMapId = 'ab81f4bbe5f7e403385ffa4637cd68f5'; // place your OpenWeatherMap id between the single quotes
var cityIdF = '5585010'; // place the city id between the single quotes (e.g. 5604473 for Freston)

var apiForecastUrlF = 'https://api.openweathermap.org/data/2.5/forecast' +
    '?id=' + cityIdF + 
    '&appid=' + openWeatherMapId +
    '&units=imperial';

var forecastRequestF = new XMLHttpRequest();
forecastRequestF.open('GET', apiForecastUrlF, true);
forecastRequestF.responseType = 'json';
forecastRequestF.send();

forecastRequestF.onload = function () {
    var forecastDataF = forecastRequestF.response;
    
    // create variables to use in the loop below
    var j = 1;
    var forecastDateF;
    var forecastTempF;

    for (i = 0; i < forecastDataF.list.length; i++)
    {
        // look for forecasts for 21:00:00
        if (forecastDataF.list[i].dt_txt.includes('21:00:00')) {
            // set date variable
            forecastDateF = new Date(forecastDataF.list[i].dt_txt);
            
            // set temperature variable
            forecastTempF = forecastDataF.list[i].main.temp.toFixed();
            
            switch (j) {
                case 1:
                    document.getElementById("day1Name").innerHTML = getDayOfWeek(forecastDateF);
                    document.getElementById("day1TempF").innerHTML = forecastTempF;
                    break;
                case 2:
                    document.getElementById("day2Name").innerHTML = getDayOfWeek(forecastDateF);
                    document.getElementById("day2TempF").innerHTML = forecastTempF;
                    break;
                case 3:
                    document.getElementById("day3Name").innerHTML = getDayOfWeek(forecastDateF);
                    document.getElementById("day3TempF").innerHTML = forecastTempF;
                    break;
                case 4:
                    document.getElementById("day4Name").innerHTML = getDayOfWeek(forecastDateF);
                    document.getElementById("day4TempF").innerHTML = forecastTempF;
                    break;
                case 5:
                    document.getElementById("day5Name").innerHTML = getDayOfWeek(forecastDateF);
                    document.getElementById("day5TempF").innerHTML = forecastTempF;
                    break;
            }

            // increment j by 1
            j++;
        }
    }
}
    
function getDayOfWeek(forecastDateF) {
    // day of week
    var dayOfWeekNumber = forecastDateF.getDay();

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
