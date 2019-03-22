
/*you can use += to add to what is already there in the tag and what you want to add the info pulled from JSON*/

var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var townData = request.response;
    /*console.log(townData);
    console.log(townData.towns[5].averageRainFall);*/


for (var i = 0; i < townData.towns.length; i++){
    if(townData.towns[i].name === 'Soda Springs'){
        document.getElementById("smoto").innerHTML = townData.towns[i].motto;
        document.getElementById("sfounded").innerHTML += townData.towns[i].yearFounded;
        document.getElementById("spop").innerHTML += townData.towns[i].currentPopulation;
        document.getElementById("srain").innerHTML += townData.towns[i].averageRainfall + " inches";
    }
    else if(townData.towns[i].name === 'Preston'){
        document.getElementById("pmoto").innerHTML = townData.towns[i].motto;
        document.getElementById("pfounded").innerHTML += townData.towns[i].yearFounded;
        document.getElementById("ppop").innerHTML += townData.towns[i].currentPopulation;
        document.getElementById("prain").innerHTML += townData.towns[i].averageRainfall + " inches";
    }
    else if(townData.towns[i].name === 'Fish Haven'){
        document.getElementById("fmoto").innerHTML = townData.towns[i].motto;
        document.getElementById("ffounded").innerHTML += townData.towns[i].yearFounded;
        document.getElementById("fpop").innerHTML += townData.towns[i].currentPopulation;
        document.getElementById("frain").innerHTML += townData.towns[i].averageRainfall + " inches";
    }
}

}