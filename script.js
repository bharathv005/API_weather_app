async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const apiKey = 'api';
  const url = `api url`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      document.getElementById('weatherInfo').innerHTML = `<p style="color:red">${data.error.message}</p>`;
      return;
    }

    const weatherHtml = `
      <h2>${data.location.name}, ${data.location.region}, ${data.location.country}</h2>
      <p><strong>Temperature:</strong> ${data.current.temp_c}°C (${data.current.temp_f}°F)</p>
      <p><strong>Condition:</strong> ${data.current.condition.text}</p>
      <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
      <p><strong>Wind:</strong> ${data.current.wind_kph} kph, ${data.current.wind_dir}</p>
      <p><strong>Feels Like:</strong> ${data.current.feelslike_c}°C</p>
      <p><strong>Air Quality Index (US-EPA):</strong> ${data.current.air_quality["us-epa-index"]}</p>
      <img src="https:${data.current.condition.icon}" alt="Weather Icon" />
    `;

    document.getElementById('weatherInfo').innerHTML = weatherHtml;
  } catch (error) {
    console.error('Error fetching weather:', error);
    document.getElementById('weatherInfo').innerHTML = '<p style="color:red">Could not fetch weather data. Try again.</p>';
  }
}
