const weather = {
  applicable_date: '',
  weather_state_name: '',
  weather_state_abbr: '',
  wind_direction: '',
  the_temp: '',
};

const weatherStateIcons = {
  sn: 'https://www.metaweather.com/static/img/weather/sn.svg',
  sl: 'https://www.metaweather.com/static/img/weather/sl.svg',
  h: 'https://www.metaweather.com/static/img/weather/h.svg',
  t: 'https://www.metaweather.com/static/img/weather/t.svg',
  hr: 'https://www.metaweather.com/static/img/weather/hr.svg',
  lr: 'https://www.metaweather.com/static/img/weather/lr.svg',
  s: 'https://www.metaweather.com/static/img/weather/s.svg',
  hc: 'https://www.metaweather.com/static/img/weather/hc.svg',
  lc: 'https://www.metaweather.com/static/img/weather/lc.svg',
  c: 'https://www.metaweather.com/static/img/weather/c.svg',
};

function header(city) {
  return `
  <div class="div-table-row">
        <h3>City ${city}</h3>
        </div>
        <div class="div-table-row"> 
        <div class="div-table-col"><h5>Date</h5></div>
        <div class="div-table-col"><h5>Weather conditions</h5></div>
        <div class="div-table-col"><h5>Wind direction</h5></div>
        <div class="div-table-col"><h5>Temparature (centigrade)</h5></div>             
        </div>`;
}

function showWeatherCondition(weather) {
  return `${weather.weather_state_name},${showImage(weather)} `;
}

function showImage(weather) {
  return `<img src=
            "${weatherStateIcons[weather.weather_state_abbr]}" 
            style="width:32px" 
            alt="${weather.weather_state_name}" >
            </img>`;
}

function showCompass(weather) {
  return `<div class="compass">
              <div class="direction">
                  <p>${weather.wind_direction_compass}</p>
              </div>
              <div class="arrow ${weather.wind_direction_compass.toLowerCase()}"></div>
          </div>`;
}

function records(weatherRecords) {
  let weatherTableRows = ``;
  if (Array.isArray(weatherRecords) && weatherRecords.length > 1) {
    weatherRecords.forEach((weather) => {
      weatherTableRows += rowHtml(weather);
    });
  }
  return weatherTableRows;
}

function rowHtml(weather) {
  return `
  <div class="div-table-row">
    <div class="div-table-col">${weather.applicable_date}</div>
    <div class="div-table-col">
    ${showWeatherCondition(weather)}
    </div>
    <div class="div-table-col">
    ${showCompass(weather)}
    </div>
    <div class="div-table-col">${weather.the_temp}</div>
    </div>`;
}

function weatherPage(city, weatherRecords) {
  return `<div class="div-table">
              ${header(city)}
              ${records(weatherRecords)}
            </div>`;
}

export default weatherPage;
