/**
 * Movies feature.
 * Planned API: TMDB. Not connected.
 *
 * Authentication is not implemented. TMDB's current docs describe an API key
 * or a read access token. Do not hardcode either value in this file.
 * A private token must not be shipped in browser JavaScript.
 *
 * Future request flow:
 * 1. TODO: when this view opens, GET popular movies into [data-results].
 * 2. TODO: GET search results for the text in [data-query].
 * 3. TODO: GET movie details for the selected id.
 *
 * UI targets, using only fields confirmed in Postman:
 * - poster image in [data-poster] (needs the documented image base URL)
 * - title, release date, overview, and TMDB rating on each result
 * - revenue from the details response, shown only when the field is present
 *
 * vote_average is a TMDB rating. Do not label it as IMDb.
 * Do not invent a poster, overview, rating, or revenue when the field is missing.
 */

function setStatus(root, message) {
  root.querySelector("[data-status]").textContent = message;
}

export function initMovies(root) {
  root.innerHTML = `
    <header class="view-header">
      <h2 id="movies-title">Movies</h2>
      <p>Popular movies and search results will appear here.</p>
    </header>

    <form class="toolbar" data-search-form>
      <div class="field field-grow">
        <label for="movie-query">Movie</label>
        <input id="movie-query" name="query" type="search" data-query autocomplete="off" placeholder="Search by title">
      </div>
      <button class="btn" type="submit">Search</button>
    </form>

    <div class="results" data-results>
      <p class="empty-state">No movies loaded. Popular titles will be requested after TMDB is verified.</p>
    </div>

    <p class="status" data-status role="status">TMDB is not connected. No credentials are stored in this page.</p>
  `;

  const form = root.querySelector("[data-search-form]");
  const queryInput = root.querySelector("[data-query]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = queryInput.value.trim();

    if (!query) {
      setStatus(root, "Enter a movie title.");
      return;
    }

    // TODO: send the search request, then render one card per verified result.
    // Selecting a card will request movie details and map revenue when present.
    setStatus(root, `Search for “${query}” will run after TMDB is verified in Postman.`);
  });
}
