

async function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon, API_KEY);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const data = await fetch(url).then((res) => res.json());
  console.log(data.name, data.weather[0].main)
  const weather = document.querySelector("#weather span:first-child");
  const city = document.querySelector("#weather span:last-child");
  weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}`;
  city.innerText = data.name;
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);