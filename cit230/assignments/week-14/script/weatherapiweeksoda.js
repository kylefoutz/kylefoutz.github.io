// forecast
var openWeatherMapId = 'ab81f4bbe5f7e403385ffa4637cd68f5'; // place your OpenWeatherMap id between the single quotes
var cityIdS = '5607916'; // place the city id between the single quotes (e.g. 5604473 for Sreston)

var apiForecastUrlS = 'https://api.openweathermap.org/data/2.5/forecast' +
    '?id=' + cityIdS + 
    '&appid=' + openWeatherMapId +
    '&units=imperial';

var forecastRequestS = new XMLHttpRequest();
forecastRequestS.open('GET', apiForecastUrlS, true);
forecastRequestS.responseType = 'json';
forecastRequestS.send();

forecastRequestS.onload = function () {
    var forecastDataS = forecastRequestS.response;
    
    // create variables to use in the loop below
    var j = 1;
    var forecastDateS;
    var forecastTempS;

    for (i = 0; i < forecastDataS.list.length; i++)
    {
        // look for forecasts for 21:00:00
        if (forecastDataS.list[i].dt_txt.includes('21:00:00')) {
            // set date variable
            forecastDateS = new Date(forecastDataS.list[i].dt_txt);
            
            // set temperature variable
            forecastTempS = forecastDataS.list[i].main.temp.toFixed();
            
            switch (j) {
                case 1:
                    document.getElementById("day1Name").innerHTML = getDayOfWeek(forecastDateS);
                    document.getElementById("day1TempS").innerHTML = forecastTempS;
                    break;
                case 2:
                    document.getElementById("day2Name").innerHTML = getDayOfWeek(forecastDateS);
                    document.getElementById("day2TempS").innerHTML = forecastTempS;
                    break;
                case 3:
                    document.getElementById("day3Name").innerHTML = getDayOfWeek(forecastDateS);
                    document.getElementById("day3TempS").innerHTML = forecastTempS;
                    break;
                case 4:
                    document.getElementById("day4Name").innerHTML = getDayOfWeek(forecastDateS);
                    document.getElementById("day4TempS").innerHTML = forecastTempS;
                    break;
                case 5:
                    document.getElementById("day5Name").innerHTML = getDayOfWeek(forecastDateS);
                    document.getElementById("day5TempS").innerHTML = forecastTempS;
                    break;
            }

            // increment j by 1
            j++;
        }
    }
}
    
function getDayOfWeek(forecastDateS) {
    // day of week
    var dayOfWeekNumber = forecastDateS.getDay();

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
