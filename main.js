const apiKey = "";
const apiUrl ="";
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weatherIcon = document.querySelector(".weather-icon");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weather = document.querySelector(".weather");
const error = document.querySelector(".error");


async function checkWeather(citySearch) {
  const response = await fetch(apiUrl + citySearch + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);

  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";
  } else {
    city.textContent = data.name;
    temp.textContent = Math.round(`${data.main.temp}`) + "°C";
    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;

    switch (data.weather[0].main) {
      case "Cloud":
        weatherIcon.src = "./images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "./images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "./images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "./images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "./images/mist.png";
        break;
      case "Snow":
        weatherIcon.src = "./images/snow.png";
        break;
      case "Cloud":
        weatherIcon.src = "./images/clouds.png";
        break;
    }

    weather.style.display = "block";
  }
}


searchBtn.onclick = () => {
  checkWeather(searchBox.value);
};


