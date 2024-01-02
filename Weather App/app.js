let temp1 = document.querySelector("#tempreture");
let humidity1 = document.querySelector("#humidity");
let wind1 = document.querySelector("#Wind");
const url =
  "https://weather-by-api-ninjas.p.apidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "68cc1e7b9bmsh3f2b4a3e3e949eap11757bjsn55e310e2a5e2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

async function getData() {
  const response = await fetch(url, options);
  const data = await response.json();
  temp1.innerHTML = `${data.temp}°C`;
  humidity1.innerHTML = `Humidity
  : ${data.humidity}`;
  console.log(data);
  wind1.innerHTML = `Wind: ${data.wind_speed}  km/h`;
}
getData();
