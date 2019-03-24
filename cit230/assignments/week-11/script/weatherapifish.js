 var fWeatherApi = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=ab81f4bbe5f7e403385ffa4637cd68f5&units=imperial";
 
 var requestF = new XMLHttpRequest();
 requestF.open('GET', fWeatherApi);
 requestF.responseType = 'json';
 requestF.send();
 
 requestF.onload = function() {
    var townFWeather = requestF.response;
    console.log(townFWeather);
    var fwind = townFWeather.wind.speed;
    var ftemper = townFWeather.main.temp;

    var fWindChill = Math.round(35.74 + (0.6125 * ftemper)
         - (35.75 * Math.pow(fwind, 0.16))
         + (0.4275 * ftemper * Math.pow(fwind, 0.16)));
       
    document.getElementById('temperatureF').innerHTML = ftemper + '&deg;';
    document.getElementById('windF').innerHTML = fwind + ' mph';
    document.getElementById('windchillF').innerHTML = fWindChill + '&deg;';

 }
 var dis1WeatherApi = "https://api.openweathermap.org/data/2.5/weather?id=5323810&appid=ab81f4bbe5f7e403385ffa4637cd68f5&units=imperial";
 
 var requestDis1 = new XMLHttpRequest();
 requestDis1.open('GET', dis1WeatherApi);
 requestDis1.responseType = 'json';
 requestDis1.send();
 
 requestDis1.onload = function() {
    var townDis1 = requestDis1.response;
    console.log(townDis1);
 var tempDis1 = townDis1.main.temp;
 var windSpeedDis1 = townDis1.wind.speed;
 
 
 var windChillDis1 = Math.round(35.74 + (0.6125 * tempDis1)
      - (35.75 * Math.pow(windSpeedDis1, 0.16))
      + (0.4275 * tempDis1 * Math.pow(windSpeedDis1, 0.16)));


document.getElementById('tempDi').innerHTML = tempDis1 + '&deg;';
document.getElementById('windDi').innerHTML = windSpeedDis1 + ' mph';
document.getElementById('windchillDi').innerHTML = windChillDis1 + '&deg;';
 }