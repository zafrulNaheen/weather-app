import axios from 'axios';
import weatherPage from './weatherPage';

async function getCity() {
  const res = { data: { city: 'Berlin' } }; //await axios.get('http://ip-api.com/json');
  return res.data.city;
}
let city = '';
async function cityWoeId() {
  city = await getCity();

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

export default cityWeather;
