/**
 * Weather feature.
 * Planned API: Open-Meteo. Not connected.
 *
 * Future request flow, after Postman verification:
 * 1. Read the city from [data-city-input].
 * 2. TODO: GET the geocoding search endpoint with the city name.
 * 3. TODO: map the verified city, country, latitude, and longitude fields.
 * 4. TODO: GET the forecast endpoint with those coordinates.
 * 5. TODO: map the verified current-weather fields into the nodes below.
 *
 * UI targets for the future response:
 * - [data-place]        city and country
 * - [data-temperature]  current temperature
 *   Remove the is-placeholder class when a real reading is shown.
 * - [data-condition]    weather condition
 * - [data-humidity]     humidity
 * - [data-wind]         wind speed
 * - [data-apparent]     apparent temperature
 *

function setStatus(root, message) {
  root.querySelector("[data-status]").textContent = message;
}

export function initWeather(root) {
  root.innerHTML = `
    <header class="view-header">
      <h2 id="weather-title">Weather</h2>
      <p>Search for a city to view its current weather.</p>
    </header>

    <form class="toolbar" data-search-form>
      <div class="field field-grow">
        <label for="weather-city">City</label>
        <input id="weather-city" name="city" type="search" data-city-input autocomplete="off" placeholder="Enter a city name">
      </div>
      <button class="btn" type="submit">Search</button>
    </form>

    <article class="card weather-card">
      <p class="eyebrow">Current conditions</p>
      <h3 data-place>No city selected</h3>
      <p class="weather-temperature is-placeholder" data-temperature>No reading yet</p>
      <p data-condition>Weather details will appear after a search.</p>
      <dl class="stat-grid">
        <div>
          <dt>Humidity</dt>
          <dd data-humidity>—</dd>
        </div>
        <div>
          <dt>Wind</dt>
          <dd data-wind>—</dd>
        </div>
        <div>
          <dt>Feels like</dt>
          <dd data-apparent>—</dd>
        </div>
      </dl>
    </article>

    <p class="status" data-status role="status">Waiting for a city search.</p>
  `;

  const form = root.querySelector("[data-search-form]");
  const cityInput = root.querySelector("[data-city-input]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();

    if (!city) {
      setStatus(root, "Enter a city name.");
      return;
    }

    // TODO: call geocoding, then the forecast request, then fill the card.
    setStatus(root, `Search for “${city}” will run after Open-Meteo is verified in Postman.`);
  });
}
