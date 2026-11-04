import { initWeather } from "./js/features/weather.js";
import { initQuotes } from "./js/features/quotes.js";
import { initJokes } from "./js/features/jokes.js";
import { initTodos } from "./js/features/todos.js";
import { initMovies } from "./js/features/movies.js";
import { initPokedex } from "./js/features/pokedex.js";
import { initCurrency } from "./js/features/currency.js";

// Shared networking will be imported from ./js/utils.js after
// endpoints are verified in Postman. No requests are made in this phase.

const features = [
  { id: "weather", init: initWeather },
  { id: "quotes", init: initQuotes },
  { id: "jokes", init: initJokes },
  { id: "todos", init: initTodos },
  { id: "movies", init: initMovies },
  { id: "pokedex", init: initPokedex },
  { id: "currency", init: initCurrency },
];

const navButtons = document.querySelectorAll("[data-feature]");
const views = document.querySelectorAll("[data-view]");

function setActiveFeature(featureId) {
  views.forEach((view) => {
    view.hidden = view.dataset.view !== featureId;
  });

  navButtons.forEach((button) => {
    const isActive = button.dataset.feature === featureId;
    button.classList.toggle("is-active", isActive);

    if (isActive) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function initApp() {
  features.forEach(({ id, init }) => {
    const view = document.querySelector(`[data-view="${id}"]`);
    init(view);
  });

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveFeature(button.dataset.feature);
    });
  });

  setActiveFeature("weather");
}

initApp();
