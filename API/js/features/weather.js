import { requestJson, setBusy, setStatus } from "../utils.js";

const conditions = { 0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast", 45: "Fog", 48: "Rime fog", 51: "Light drizzle", 61: "Rain", 71: "Snow", 80: "Rain showers", 95: "Thunderstorm" };
const degree = value => Math.round(value) + "°";
const cityAliases = { bang: "Bangalore", bengaluru: "Bengaluru" };

export function initWeather(root) {
  root.innerHTML = '<header class="view-header"><h2 id="weather-title">Weather</h2><p>Start typing a city and choose a location.</p></header><form class="toolbar" data-search-form><div class="field field-grow weather-search-field"><label for="weather-city">City</label><input id="weather-city" name="city" type="search" data-city-input placeholder="Try Bangalore, London, or Tokyo" autocomplete="off" required><div class="choice-list weather-suggestions" data-choices hidden></div></div><button class="btn" type="submit">Search</button></form><article class="card weather-card" data-weather-card><p class="eyebrow">Current conditions</p><h3 data-place>No city selected</h3><p class="weather-temperature is-placeholder" data-temperature>—</p><p data-condition>Search for a city to begin.</p><dl class="stat-grid"><div><dt>Humidity</dt><dd data-humidity>—</dd></div><div><dt>Wind</dt><dd data-wind>—</dd></div><div><dt>Feels like</dt><dd data-apparent>—</dd></div><div><dt>Cloud cover</dt><dd data-cloud>—</dd></div></dl><div class="hourly-grid" data-hourly></div></article>';
  const form = root.querySelector("[data-search-form]"), input = root.querySelector("[data-city-input]"), choices = root.querySelector("[data-choices]"), search = form.querySelector("button");
  let suggestionTimer;
  input.addEventListener("input", () => { clearTimeout(suggestionTimer); const name = input.value.trim(); if (name.length < 2) { choices.hidden = true; return; } suggestionTimer = setTimeout(() => showSuggestions(name), 250); });
  input.addEventListener("keydown", event => { if (event.key === "Escape") choices.hidden = true; });
  form.addEventListener("submit", async event => { event.preventDefault(); const name = input.value.trim(); if (name) await showSuggestions(name, true); });
  async function showSuggestions(name, submit = false) { try { const requests = [name]; const alias = Object.entries(cityAliases).find(([prefix]) => name.toLowerCase().startsWith(prefix)); if (alias && alias[1].toLowerCase() !== name.toLowerCase()) requests.push(alias[1]); const responses = await Promise.all(requests.map(value => requestJson("https://geocoding-api.open-meteo.com/v1/search?" + new URLSearchParams({ name: value, count: "20", language: "en", format: "json" })))); const allPlaces = responses.flatMap((response, index) => (response.results || []).map(place => ({ ...place, preferred: index === 1 }))); const matches = rankPlaces(allPlaces, name); if (!matches.length) { choices.hidden = true; return; } choices.replaceChildren(...matches.slice(0, 12).map(place => { const button = document.createElement("button"); button.className = "choice-button"; button.type = "button"; button.textContent = place.name + ", " + (place.admin1 ? place.admin1 + ", " : "") + (place.country || place.country_code || ""); button.addEventListener("click", () => loadForecast(place)); return button; })); choices.hidden = false; if (submit && (matches.length === 1 || scorePlace(matches[0], name.toLowerCase()) >= 100)) loadForecast(matches[0]); } catch { choices.hidden = true; } }
  async function loadForecast(place) { choices.hidden = true; setBusy(search, true, "Loading…"); try { const params = new URLSearchParams({ latitude: place.latitude, longitude: place.longitude, current: "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,precipitation,cloud_cover", hourly: "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation_probability,weather_code", forecast_days: "2", timezone: "auto" }); const data = await requestJson("https://api.open-meteo.com/v1/forecast?" + params), current = data.current; root.querySelector("[data-place]").textContent = place.name + ", " + (place.country || place.country_code || ""); root.querySelector("[data-temperature]").textContent = degree(current.temperature_2m); root.querySelector("[data-temperature]").classList.remove("is-placeholder"); root.querySelector("[data-condition]").textContent = conditions[current.weather_code] || "Weather conditions"; root.querySelector("[data-humidity]").textContent = current.relative_humidity_2m + "%"; root.querySelector("[data-wind]").textContent = current.wind_speed_10m + " km/h"; root.querySelector("[data-apparent]").textContent = degree(current.apparent_temperature); root.querySelector("[data-cloud]").textContent = current.cloud_cover + "%"; renderHourly(root.querySelector("[data-hourly]"), data.hourly); const card = root.querySelector("[data-weather-card]"); card.classList.remove("weather-reveal"); void card.offsetWidth; card.classList.add("weather-reveal"); } catch (error) { setStatus(root, error.message, "error"); } finally { setBusy(search, false); } }
}

function rankPlaces(places, query) {
  const text = query.trim().toLowerCase();
  return places.sort((a, b) => scorePlace(b, text) - scorePlace(a, text));
}
function scorePlace(place, query) {
  if (place.preferred && query.startsWith("bang")) return 150;
  const name = String(place.name || "").toLowerCase();
  if (name === query) return 100;
  if (name.startsWith(query)) return 80;
  if (name.includes(query)) return 60;
  return 20;
}
function renderHourly(node, hourly) { node.replaceChildren(); if (!hourly?.time?.length) return; hourly.time.slice(0, 8).forEach((time, index) => { const item = document.createElement("div"); item.className = "hour-card"; item.textContent = new Date(time).toLocaleTimeString([], { hour: "numeric" }) + " " + Math.round(hourly.temperature_2m[index]) + "°"; node.append(item); }); }
