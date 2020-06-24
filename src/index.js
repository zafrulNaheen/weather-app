import cityWeather from './getCity';
import './index.scss';

(async () => {
  document.getElementById('root').innerHTML = await cityWeather();
})();
