export class ApiError extends Error {
  constructor(message, status = 0) { super(message); this.name = "ApiError"; this.status = status; }
}

export async function requestJson(url, options = {}) {
  const { timeout = 10000, signal, ...fetchOptions } = options;
  const controller = new AbortController();
  const abort = () => controller.abort();
  const timer = setTimeout(abort, timeout);
  signal?.addEventListener("abort", abort, { once: true });
  try {
    const response = await fetch(url, { ...fetchOptions, signal: controller.signal });
    const contentType = response.headers.get("content-type") || "";
    const body = response.status === 204 ? null : contentType.includes("application/json") ? await response.json() : await response.text();
    if (!response.ok) {
      const detail = body && typeof body === "object" ? body.message || body.status_message : body;
      throw new ApiError(detail || `Request failed with HTTP ${response.status}.`, response.status);
    }
    return body;
  } catch (error) {
    if (error.name === "AbortError") throw new ApiError("The request timed out or was cancelled.");
    if (error instanceof ApiError) throw error;
    throw new ApiError("Network request failed. Check your connection and try again.");
  } finally { clearTimeout(timer); signal?.removeEventListener("abort", abort); }
}

export function setStatus(root, message, kind = "") {
  const node = root.querySelector("[data-status]");
  if (node) { node.textContent = message; node.dataset.kind = kind; }
}

export function setBusy(button, busy, label = "Loading…") {
  if (!button) return;
  if (busy) { button.dataset.defaultLabel ??= button.textContent; button.textContent = label; button.disabled = true; }
  else { button.textContent = button.dataset.defaultLabel || button.textContent; button.disabled = false; }
}

export function textList(items, empty = "None available") { return Array.isArray(items) && items.length ? items : [empty]; }
