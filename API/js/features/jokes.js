/**
 * Jokes feature.
 * Planned API: JokeAPI. Not connected.
 *
 * Future request flow:
 * 1. TODO: GET a random joke with the API's safe-mode option.
 * 2. TODO: read the verified type field.
 * 3. Single-part jokes: show [data-joke] and hide the two-part block.
 * 4. Two-part jokes: show [data-setup] and [data-delivery] separately.
 * 5. TODO: handle the documented error shape without rendering missing text.
 */

function setStatus(root, message) {
  root.querySelector("[data-status]").textContent = message;
}

export function initJokes(root) {
  root.innerHTML = `
    <header class="view-header">
      <h2 id="jokes-title">Jokes</h2>
      <p>Request a random safe joke.</p>
    </header>

    <div class="stage">
      <article class="card joke-card">
        <p class="eyebrow">Joke</p>
        <p class="joke-text" data-single hidden></p>
        <div data-twopart hidden>
          <p class="joke-text" data-setup></p>
          <p class="joke-delivery" data-delivery></p>
        </div>
        <p data-placeholder>A joke will appear here.</p>
        <button class="btn" type="button" data-new-joke>New joke</button>
      </article>
    </div>

    <p class="status" data-status role="status">No joke requested yet.</p>
  `;

  root.querySelector("[data-new-joke]").addEventListener("click", () => {
    // TODO: request a safe joke and choose the single-part or two-part layout.
    setStatus(root, "A new joke will load after JokeAPI is verified in Postman.");
  });
}
