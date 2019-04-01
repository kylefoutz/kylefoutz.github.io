 var pWeatherApi = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=ab81f4bbe5f7e403385ffa4637cd68f5&units=imperial";
 
 var requestP = new XMLHttpRequest();
 requestP.open('GET', pWeatherApi);
 requestP.responseType = 'json';
 requestP.send();
 
 requestP.onload = function() {
    var townPWeather = requestP.response;
    console.log(townPWeather);
    var pwind = townPWeather.wind.speed;
    var ptemper = townPWeather.main.temp;

    var pWindChill = Math.round(35.74 + (0.6125 * ptemper)
         - (35.75 * Math.pow(pwind, 0.16))
         + (0.4275 * ptemper * Math.pow(pwind, 0.16)));
       
    document.getElementById('temperatureP').innerHTML = ptemper + '&deg;';
    document.getElementById('windP').innerHTML = pwind + ' mph';
    document.getElementById('windchillP').innerHTML = pWindChill + '&deg;';

   console.log(ptemper);
   console.log(pwind);
   console.log(pWindChill);



 }
 var disWeatherApi = "https://api.openweathermap.org/data/2.5/weather?id=5323810&appid=ab81f4bbe5f7e403385ffa4637cd68f5&units=imperial";
 
 var requestDis = new XMLHttpRequest();
 requestDis.open('GET', disWeatherApi);
 requestDis.responseType = 'json';
 requestDis.send();
 
 requestDis.onload = function() {
    var townDis = requestDis.response;
    console.log(townDis);
 var tempDis = townDis.main.temp;
 var windSpeedDis = townDis.wind.speed;
 
 
 var windChillDis = Math.round(35.74 + (0.6125 * tempDis)
      - (35.75 * Math.pow(windSpeedDis, 0.16))
      + (0.4275 * tempDis * Math.pow(windSpeedDis, 0.16)));


document.getElementById('tempD').innerHTML = tempDis + '&deg;';
document.getElementById('windD').innerHTML = windSpeedDis + ' mph';
document.getElementById('windchillD').innerHTML = windChillDis + '&deg;';
 }