 var sWeatherApi = "https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=ab81f4bbe5f7e403385ffa4637cd68f5&units=imperial";
 
 var requestS = new XMLHttpRequest();
 requestS.open('GET', sWeatherApi);
 requestS.responseType = 'json';
 requestS.send();
 
 requestS.onload = function() {
    var townSWeather = requestS.response;
    console.log(townSWeather);
    var swind = townSWeather.wind.speed;
    var stemper = townSWeather.main.temp;

    var sWindChill = Math.round(35.74 + (0.6125 * stemper)
         - (35.75 * Math.pow(swind, 0.16))
         + (0.4275 * stemper * Math.pow(swind, 0.16)));
       
    document.getElementById('temperatureS').innerHTML = stemper + '&deg;';
    document.getElementById('windS').innerHTML = swind + ' mph';
    document.getElementById('windchillS').innerHTML = sWindChill + '&deg;';



 }
 var dis2WeatherApi = "https://api.openweathermap.org/data/2.5/weather?id=5323810&appid=ab81f4bbe5f7e403385ffa4637cd68f5&units=imperial";
 
 var requestDis2 = new XMLHttpRequest();
 requestDis2.open('GET', dis2WeatherApi);
 requestDis2.responseType = 'json';
 requestDis2.send();
 
 requestDis2.onload = function() {
    var townDis2 = requestDis2.response;
    console.log(townDis2);
 var tempDis2 = townDis2.main.temp;
 var windSpeedDis2 = townDis2.wind.speed;
 
 
 var windChillDis2 = Math.round(35.74 + (0.6125 * tempDis2)
      - (35.75 * Math.pow(windSpeedDis2, 0.16))
      + (0.4275 * tempDis2 * Math.pow(windSpeedDis2, 0.16)));


document.getElementById('tempDis').innerHTML = tempDis2 + '&deg;';
document.getElementById('windDis').innerHTML = windSpeedDis2 + ' mph';
document.getElementById('windchillDis').innerHTML = windChillDis2 + '&deg;';
 }