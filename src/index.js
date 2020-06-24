import { cityWeather, cityWeatherBySearch } from './getCity';
import './index.scss';

(async () => {
  document
    .getElementById('searchWeather')
    .addEventListener('click', async () => {
      const date = document.getElementById('weatherDate').value;
      const cityName = document.getElementById('cityName').value;
      document.getElementById(
        'city-weather'
      ).innerHTML = await cityWeatherBySearch(cityName, date);
    });
  document.getElementById('city-weather').innerHTML = await cityWeather();
})();
