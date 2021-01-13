'use strict';

const apiKey = 'ba0d084c74eaed1c67211ce2db29a79f';

function getWeather(city, state) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},usa&units=imperial&appid=${apiKey}`;
    get(url).then(response => {
        console.log(response.main.temp)
    });
}

getWeather('statesboro','ga')