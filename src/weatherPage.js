const weather = {
  applicable_date: '',
  weather_state_name: '',
  weather_state_abbr: '',
  wind_direction: '',
  the_temp: '',
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
    <div class="div-table-col">${weather.weather_state_name}, ${weather.weather_state_abbr}</div>
    <div class="div-table-col">${weather.wind_direction}</div>
    <div class="div-table-col">${weather.temparature}</div>
    </div>`;
}

function weatherPage(city, weatherRecords) {
  return `<div class="div-table">
              ${header(city)}
              ${records(weatherRecords)}
            </div>`;
}

export default weatherPage;
