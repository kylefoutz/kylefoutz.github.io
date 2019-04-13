var city = {
   weather: function () {
      var openWeatherMapId = 'ab81f4bbe5f7e403385ffa4637cd68f5';
      var cityZip = this.czip;
      var cityTemp = this.cityOne

      var apiWeatherURL = 'https://api.openweathermap.org/data/2.5/weather' +
         '?zip=' + cityZip +
         '&appid=' + openWeatherMapId +
         '&units=imperial';

      var requestF = new XMLHttpRequest();
      requestF.open('GET', apiWeatherURL);
      requestF.responseType = 'json';
      requestF.send();

      requestF.onload = function () {
         var townFWeather = requestF.response;
         var ctemp = townFWeather.main.temp;

         document.getElementById(cityTemp).innerHTML = ctemp + '&deg;';
      }

      var cityClosureURL = 'json/temple.json';
      var requestC = new XMLHttpRequest();
      requestC.open('GET', cityClosureURL);
      requestC.responseType = 'json';
      requestC.send();

      requestC.onload = function () {
         var templeData = requestC.response;
         console.log(templeData[0].temple[0]);

         for (var j = 0; j < templeData[0].temple.length; j++) {
            if (templeData[0].temple[j] === this.cityNum) {
               for (var c = 0; c < templeData.temple.closeures[c].length; c++) {
                  document.getElementById(this.cityClose).innerHTML += concat(templeData.temple[j].closeures[c].start.value + "-" + templeData.temple[j].closeures[c].end.date + ". ");

               }
            }
         }
      }
   }
}


      var rexburg = {
         czip: "83440",
         cityOne: "rexw",
         cityClose: "rexc",
         cityNum: "0",
      }

      var saltlake = {
         czip: "84150",
         cityOne: "saltw",
         cityClose: "saltc",
         cityNum: "1",
      }

      var ogden = {
         czip: "84401",
         cityOne: "ogw",
         cityClose: "ogc",
         cityNum: "2",
      }

      var stgeorge = {
         czip: "84770",
         cityOne: "georgw",
         cityClose: "georgc",
         cityNum: "3",
      }

      city.weather.call(rexburg);
      city.weather.call(saltlake);
      city.weather.call(ogden);
      city.weather.call(stgeorge);