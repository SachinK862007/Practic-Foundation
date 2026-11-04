/**
 * To-dos feature.
 * Planned API: JSONPlaceholder. Not connected.
 *
 * JSONPlaceholder simulates POST, PUT, and DELETE. Those responses
 * do not permanently change the server's example data.
 *
 * Future request flow:
 * - TODO: GET the todo collection into [data-list].
 * - TODO: POST a JSON body from the draft title and note.
 *         Header to confirm in Postman: Content-Type: application/json.
 * - TODO: PUT the edited item.
 * - TODO: DELETE the selected item.
 * - TODO: update completion with the method verified in Postman.
 *
 * Each saved item will later render edit, complete, and delete controls.
 * Completed titles will use the .is-complete style.
 */

function setStatus(root, message) {
  root.querySelector("[data-status]").textContent = message;
}

export function initTodos(root) {
  root.innerHTML = `
    <header class="view-header view-header-split">
      <div>
        <h2 id="todos-title">To-dos</h2>
        <p>Write a note. It will be sent after JSONPlaceholder is verified.</p>
      </div>
      <button class="btn btn-icon" type="button" data-add aria-label="Add a todo">+</button>
    </header>

    <form class="card composer" data-composer hidden>
      <div class="field">
        <label for="todo-title">Title</label>
        <input id="todo-title" name="title" type="text" data-title autocomplete="off">
      </div>
      <div class="field">
        <label for="todo-note">Note</label>
        <textarea id="todo-note" name="note" rows="3" data-note></textarea>
      </div>
      <div class="button-row">
        <button class="btn" type="submit">Save</button>
        <button class="btn btn-secondary" type="button" data-cancel>Cancel</button>
      </div>
    </form>

    <div class="notes-board">
      <p class="empty-state" data-empty>No notes yet. Use the plus button to start one.</p>
      <ul class="note-list" data-list></ul>
    </div>

    <p class="status" data-status role="status">Notes are not connected to JSONPlaceholder yet.</p>
  `;

  const addButton = root.querySelector("[data-add]");
  const composer = root.querySelector("[data-composer]");
  const titleInput = root.querySelector("[data-title]");
  const noteInput = root.querySelector("[data-note]");

  addButton.addEventListener("click", () => {
    composer.hidden = false;
    titleInput.focus();
  });

  root.querySelector("[data-cancel]").addEventListener("click", () => {
    composer.reset();
    composer.hidden = true;
    setStatus(root, "Draft discarded on this screen.");
  });

  composer.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = titleInput.value.trim();

    if (!title) {
      setStatus(root, "Enter a title before saving.");
      titleInput.focus();
      return;
    }

    // TODO: POST the draft. Do not treat the simulated response as stored data.
    // The note text will be mapped onto a card in [data-list] only after that
    // request is verified. Edit, complete, and delete handlers belong on that card.
    setStatus(root, "Saving will send a POST after JSONPlaceholder is verified in Postman.");
  });
}
