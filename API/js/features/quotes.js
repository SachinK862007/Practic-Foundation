/**
 * Quotes feature.
 * Planned API: DummyJSON. Not connected.
 *
 * Future request flow:
 * 1. TODO: GET the verified random-quote endpoint when "New quote" is clicked.
 * 2. TODO: map the verified quote text into [data-quote].
 * 3. TODO: map the verified author into [data-author].
 */

function setStatus(root, message) {
  root.querySelector("[data-status]").textContent = message;
}

export function initQuotes(root) {
  root.innerHTML = `
    <header class="view-header">
      <h2 id="quotes-title">Quotes</h2>
      <p>Request a random quote.</p>
    </header>

    <div class="stage">
      <article class="card quote-card">
        <p class="eyebrow">Quote</p>
        <blockquote data-quote>A quote will appear here.</blockquote>
        <p class="attribution" data-author>Author</p>
        <button class="btn" type="button" data-new-quote>New quote</button>
      </article>
    </div>

    <p class="status" data-status role="status">No quote requested yet.</p>
  `;

  root.querySelector("[data-new-quote]").addEventListener("click", () => {
    // TODO: send the random-quote request and map quote and author.
    setStatus(root, "A new quote will load after DummyJSON is verified in Postman.");
  });
}
