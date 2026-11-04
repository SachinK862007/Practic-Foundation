/**
 * Pokédex feature.
 * Planned API: PokéAPI. Not connected.
 *
 * Future request flow:
 * 1. Read the name or ID from [data-query].
 * 2. TODO: GET the verified Pokémon endpoint.
 * 3. TODO: map confirmed fields into the nodes below.
 * 4. An unknown name or ID should show the error status, not an empty card.
 *
 * UI targets:
 * - [data-artwork]  official artwork or sprite, chosen after the response is inspected
 * - [data-name]     name
 * - [data-id]       id
 * - [data-types]    types
 * - [data-abilities] abilities
 * - [data-stats]    base statistics
 * - [data-height]   height
 * - [data-weight]   weight
 */

function setStatus(root, message) {
  root.querySelector("[data-status]").textContent = message;
}

export function initPokedex(root) {
  root.innerHTML = `
    <header class="view-header">
      <h2 id="pokedex-title">Pokédex</h2>
      <p>Look up a Pokémon by name or ID.</p>
    </header>

    <form class="toolbar" data-search-form>
      <div class="field field-grow">
        <label for="pokemon-query">Name or ID</label>
        <input id="pokemon-query" name="query" type="search" data-query autocomplete="off" placeholder="For example, a name or a number">
      </div>
      <button class="btn" type="submit">Search</button>
    </form>

    <article class="pokedex">
      <div class="pokedex-screen">
        <img data-artwork alt="" hidden>
        <p class="artwork-placeholder" data-artwork-placeholder>Artwork</p>
        <h3 data-name>No Pokémon selected</h3>
        <p data-id>ID —</p>
      </div>
      <div class="pokedex-details">
        <section>
          <h3>Types</h3>
          <ul data-types><li>Types will appear here.</li></ul>
        </section>
        <section>
          <h3>Abilities</h3>
          <ul data-abilities><li>Abilities will appear here.</li></ul>
        </section>
        <section>
          <h3>Base statistics</h3>
          <ul data-stats><li>Statistics will appear here.</li></ul>
        </section>
        <dl class="stat-grid">
          <div>
            <dt>Height</dt>
            <dd data-height>—</dd>
          </div>
          <div>
            <dt>Weight</dt>
            <dd data-weight>—</dd>
          </div>
        </dl>
      </div>
    </article>

    <p class="status" data-status role="status">Waiting for a Pokémon search.</p>
  `;

  const form = root.querySelector("[data-search-form]");
  const queryInput = root.querySelector("[data-query]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = queryInput.value.trim();

    if (!query) {
      setStatus(root, "Enter a Pokémon name or ID.");
      return;
    }

    // TODO: request the Pokémon and map the confirmed response into this card.
    setStatus(root, `Lookup for “${query}” will run after PokéAPI is verified in Postman.`);
  });
}
