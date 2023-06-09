
const weatherBlock = document.querySelector('#weather');

async function loadWeather(e) {
    weatherBlock.innerHTML = `
    <div class="weather_loading">
    <img src="img/loading.gif" alt="Loading...">
    </div>`;

    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lutsk&appid=5576797fa20f4fa3035fe39bdf9e6f23';
    const response = await fetch(server, {
        method: 'GET',
    });
    const responseResult = await response.json();

    if (response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data) {
    console.log(data);

    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelslike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    const template = `
    <div class="weather_header">
       <div class="weather_main">
         <div class="weather_city">${location}</div>
         <div class="weather_status">${weatherStatus}</div>
       </div>
      <div class="weather_icon">
        <img src="http://openweathermap.org/img/w/${weatherIcon}" alt="${weatherStatus}">
      </div>
    </div>
     <div class="weather_temp">${temp}</div>
     <div class="weather_feels-like">Feels like: ${feelslike}</div>`;

     weatherBlock.innerHTML = template;
}

if (weatherBlock) {
    loadWeather();
}

