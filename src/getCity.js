import axios from 'axios';
import weatherPage from './weatherPage';

async function getCity() {
  const res = await axios.get('http://ip-api.com/json');
  return res.data.city;
}

let city = '';
async function cityWoeId(cityParam) {
  if (!cityParam) city = await getCity();
  else city = cityParam;
  const urlProxy = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search?query=${city}`;
  const res = await axios.get(urlProxy);
  return res.data[0].woeid;
}

async function cityWeather() {
  const woeid = await cityWoeId();
  const date =
    new Date().getFullYear().toString() +
    '/' +
    new Date().getMonth().toString() +
    '/' +
    new Date().getDate().toString();

  const urlProxy = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/${date}/`;

  const res = await axios.get(urlProxy);
  const weatherRecords = JSON.parse(JSON.stringify(res.data));

  return weatherPage(city, weatherRecords);
}

async function cityWeatherBySearch(cityParam, dateParam) {
  const woeid = await cityWoeId(cityParam);
  const date =
    new Date(dateParam).getFullYear().toString() +
    '/' +
    new Date(dateParam).getMonth().toString() +
    '/' +
    new Date(dateParam).getDate().toString();

  const urlProxy = `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/${date}/`;

  const res = await axios.get(urlProxy);
  const weatherRecords = JSON.parse(JSON.stringify(res.data));

  return weatherPage(city, weatherRecords);
}

export { cityWeather, cityWeatherBySearch };
