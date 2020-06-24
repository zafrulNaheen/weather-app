import axios from 'axios';
import { cityWoeId } from './getCity';

const weather = async () => {
  const woeid = await cityWoeId();
  const res = await axios.get(
    'https://www.metaweather.com/api/location/' + woeid
  );
  const weatherJson = JSON.stringify(res.data.results[0]);

  const template = `
    <div class="card">
      <img src="${weatherJson.picture.large}" />
      <div class="card-body">
        <h1>${weatherJson.name.first} ${user.name.last}</h1>
        <ul>
          <li>${weatherJson.email}</li>
          <li>${weatherJson.phone}</li>
          <li>${weatherJson.location.city}</li>
        </ul>
      </div>
    </div>
  `;

  return template;
};

export default weather;
