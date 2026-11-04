/**
 * Currency feature.
 * Planned API: Frankfurter. Not connected.
 *
 * Future request flow:
 * 1. TODO: GET the verified currency list and fill both select elements.
 * 2. Read the amount, source code, and destination code.
 * 3. TODO: GET the verified rate for that pair.
 * 4. TODO: map the verified rate and date into [data-result] and [data-rate-date].
 *    The converted amount is calculated from the verified rate and the user amount.
 *
 * Unsupported codes and failed requests stay in [data-status].
 * Do not invent currency codes or rates before the list response is inspected.
 */

function setStatus(root, message) {
  root.querySelector("[data-status]").textContent = message;
}

export function initCurrency(root) {
  root.innerHTML = `
    <header class="view-header">
      <h2 id="currency-title">Currency</h2>
      <p>Convert an amount between two currencies.</p>
    </header>

    <form class="currency-board" data-convert-form>
      <section class="card currency-panel currency-panel-source">
        <div class="field">
          <label for="currency-amount">Amount</label>
          <input id="currency-amount" name="amount" type="number" min="0" step="any" data-amount inputmode="decimal">
        </div>
        <div class="field">
          <label for="currency-from">From</label>
          <select id="currency-from" name="from" data-from disabled>
            <option value="">Currencies will load from the API</option>
          </select>
        </div>
      </section>

      <button class="btn btn-secondary" type="button" data-swap>Swap</button>

      <section class="card currency-panel currency-panel-destination">
        <div class="field">
          <label for="currency-to">To</label>
          <select id="currency-to" name="to" data-to disabled>
            <option value="">Currencies will load from the API</option>
          </select>
        </div>
        <p class="result-label">Converted amount</p>
        <p class="result-value" data-result>—</p>
        <p data-rate-date>Rate date will appear here.</p>
      </section>

      <button class="btn" type="submit">Convert</button>
    </form>

    <p class="status" data-status role="status">Currency codes are not loaded yet.</p>
  `;

  const form = root.querySelector("[data-convert-form]");
  const amountInput = root.querySelector("[data-amount]");

  root.querySelector("[data-swap]").addEventListener("click", () => {
    // TODO: exchange the selected values of [data-from] and [data-to]
    // after the currency list has been loaded.
    setStatus(root, "Swap will reverse the two currencies after the currency list is loaded.");
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = Number(amountInput.value);

    if (amountInput.value.trim() === "" || !Number.isFinite(amount)) {
      setStatus(root, "Enter a valid amount.");
      amountInput.focus();
      return;
    }

    if (amount < 0) {
      setStatus(root, "Enter an amount that is zero or greater.");
      return;
    }

    // TODO: request the exchange rate and write the converted amount.
    setStatus(root, "Conversion will run after Frankfurter is verified in Postman.");
  });
}
