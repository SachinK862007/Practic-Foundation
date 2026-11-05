import { requestJson, setStatus } from "../utils.js";

const API = "https://jsonplaceholder.typicode.com/todos";
const STORAGE_KEY = "api-hub-todos";

export function initTodos(root) {
  root.innerHTML = '<header class="view-header view-header-split"><div><h2 id="todos-title">To-dos</h2><p>Local session to-dos. No PUT/DELETE request is sent, so JSON Server cannot break editing.</p></div><button class="btn btn-icon" type="button" data-add aria-label="Add a todo">+</button></header><form class="card composer" data-composer hidden><div class="field"><label for="todo-title">Title</label><input id="todo-title" data-title required></div><div class="field"><label for="todo-note">Note</label><textarea id="todo-note" data-note rows="3"></textarea></div><div class="button-row"><button class="btn" type="submit">Save</button><button class="btn btn-secondary" type="button" data-cancel>Cancel</button></div></form><div class="notes-board"><p class="empty-state" data-empty>Loading notes…</p><ul class="note-list" data-list></ul></div><p class="status" data-status role="status">Loading…</p>';
  const list = root.querySelector("[data-list]"), empty = root.querySelector("[data-empty]"), composer = root.querySelector("[data-composer]"), title = root.querySelector("[data-title]"), note = root.querySelector("[data-note]"), add = root.querySelector("[data-add]");
  let todos = [], editing = null;

  add.addEventListener("click", () => { editing = null; composer.reset(); composer.hidden = false; title.focus(); });
  root.querySelector("[data-cancel]").addEventListener("click", () => { editing = null; composer.reset(); composer.hidden = true; });
  composer.addEventListener("submit", event => { event.preventDefault(); const titleText = title.value.trim(); if (!titleText) return setStatus(root, "Enter a title.", "error"); const item = { id: editing?.id || makeId(), title: titleText, note: note.value.trim(), completed: editing?.completed || false }; if (editing) todos = todos.map(todo => todo.id === editing.id ? item : todo); else todos = [item, ...todos]; persist(); render(); composer.reset(); composer.hidden = true; editing = null; setStatus(root, "Saved locally for this browser session.", "success"); });

  async function load() {
    const saved = readSaved();
    if (saved.length) { todos = saved; render(); setStatus(root, "Loaded your saved local to-dos."); return; }
    try { const remote = await requestJson(API + "?_limit=8"); todos = remote.map(item => ({ id: makeId(), title: item.title, note: "", completed: item.completed })); persist(); render(); setStatus(root, "Loaded starter to-dos. Changes are stored locally."); }
    catch (error) { todos = []; render(); setStatus(root, "Could not load starter to-dos. You can still add local notes.", "error"); }
  }
  function readSaved() { try { const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); return Array.isArray(value) ? value : []; } catch { return []; } }
  function persist() { localStorage.setItem(STORAGE_KEY, JSON.stringify(todos)); }
  function makeId() { return Date.now().toString(36) + Math.random().toString(36).slice(2); }
  function render() { empty.hidden = todos.length > 0; empty.textContent = "No notes yet. Add one above."; list.replaceChildren(...todos.map(item => { const li = document.createElement("li"); li.className = "note-card" + (item.completed ? " is-complete" : ""); const content = document.createElement("div"), heading = document.createElement("strong"), body = document.createElement("p"); heading.textContent = item.title; body.textContent = item.note || "No note"; content.append(heading, body); const actions = document.createElement("div"); actions.className = "button-row"; const complete = document.createElement("button"); complete.className = "btn btn-secondary"; complete.textContent = item.completed ? "Reopen" : "Complete"; complete.addEventListener("click", () => { item.completed = !item.completed; persist(); render(); }); const edit = document.createElement("button"); edit.className = "btn btn-secondary"; edit.textContent = "Edit"; edit.addEventListener("click", () => { editing = item; title.value = item.title; note.value = item.note; composer.hidden = false; title.focus(); }); const remove = document.createElement("button"); remove.className = "btn btn-danger"; remove.textContent = "Delete"; remove.addEventListener("click", () => { todos = todos.filter(todo => todo.id !== item.id); persist(); render(); setStatus(root, "Todo deleted locally.", "success"); }); actions.append(complete, edit, remove); li.append(content, actions); return li; })); }
  load();
}
