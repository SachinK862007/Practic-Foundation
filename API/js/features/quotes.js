import { requestJson, setBusy, setStatus } from "../utils.js";

export function initQuotes(root) {
  root.innerHTML = `<header class="view-header"><h2 id="quotes-title">Quotes</h2><p>Find a little perspective from DummyJSON.</p></header><div class="stage"><article class="card quote-card"><p class="eyebrow">Quote</p><blockquote data-quote>Click below for a quote.</blockquote><p class="attribution" data-author></p><div class="button-row"><button class="btn" type="button" data-new-quote>New quote</button><button class="btn btn-secondary" type="button" data-copy>Copy</button></div></article></div>`;
  const quote = root.querySelector("[data-quote]"), author = root.querySelector("[data-author]"), load = root.querySelector("[data-new-quote]"); let current = "";
  async function fetchQuote() { setBusy(load, true, "Loading…"); setStatus(root, "Requesting a quote…"); try { const data = await requestJson("https://dummyjson.com/quotes/random"); current = `“${data.quote}” — ${data.author}`; quote.textContent = `“${data.quote || "No quote returned."}”`; author.textContent = data.author ? `— ${data.author}` : ""; setStatus(root, "Quote loaded.", "success"); } catch (error) { setStatus(root, error.message, "error"); } finally { setBusy(load, false); } }
  load.addEventListener("click", fetchQuote);
  root.querySelector("[data-copy]").addEventListener("click", async () => { if (!current) return setStatus(root, "Load a quote before copying."); try { await navigator.clipboard.writeText(current); setStatus(root, "Quote copied.", "success"); } catch { setStatus(root, "Copy is unavailable in this browser.", "error"); } });
}
