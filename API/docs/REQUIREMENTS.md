
# API Hub — Functional and Non-Functional Requirements

## 1. Application Overview

API Hub is a multi-tool web application with seven independent features accessible from a persistent left sidebar.

The application must use HTML, CSS, and vanilla JavaScript.

All features must share a consistent visual language and should occupy the available screen space efficiently.

## 2. Navigation

The sidebar must contain seven options in this exact order:

1. Weather
2. Quotes
3. Jokes
4. To-dos
5. Movies
6. Pokédex
7. Currency

Requirements:

- Sidebar remains visible during normal application use on desktop.
- Each navigation option opens its corresponding feature.
- Active navigation item must be visually distinguishable.
- Switching tabs must not reload the entire page.
- Each feature must have its own content area.
- The layout must adapt to smaller screens.
- The initial feature displayed must be Weather.

## 3. Weather

API: Open-Meteo

The feature must:

- Provide a city search input.
- Allow the user to search for a city.
- Use geocoding to identify the city and obtain coordinates.
- Fetch weather information for the selected location.
- Display city and country information when available.
- Display current temperature.
- Display weather condition.
- Display relevant weather details such as humidity, wind speed, and apparent temperature where supported.
- Display an appropriate loading state.
- Display an understandable error when the city is not found or the request fails.

Visual requirements:

- Weather information should be presented in a visually prominent card.
- Use a subtle animation based on the weather condition.
- Avoid excessive animation or distracting effects.
- Weather visuals must not prevent access to important information.

## 4. Quotes

API: DummyJSON

The feature must:

- Display a large quote card near the centre of the content area.
- Provide a button to request another random quote.
- Display quote text.
- Display the author.
- Show a loading state while retrieving a quote.
- Handle failed requests.

## 5. Jokes

API: JokeAPI

The feature must:

- Display a large joke card.
- Provide a button to retrieve another joke.
- Support both single-part and two-part joke responses.
- Display setup and delivery separately for two-part jokes.
- Respect the API's safe-mode option.
- Avoid displaying undefined or missing response properties.
- Handle request failures.

## 6. To-dos

API: JSONPlaceholder

The feature should have a note-taking interface inspired by Google Keep, without copying its branding or exact interface.

The feature must:

- Provide a visible add button using a plus icon.
- Allow the user to create a new todo.
- Allow the user to enter a title.
- Allow the user to enter a description or note.
- Support a draft or editing state.
- Allow the user to save a todo.
- Allow the user to edit a saved item.
- Allow the user to delete an item.
- Allow the user to mark an item as completed.
- Visually strike through completed items.
- Display a clear empty state.
- Display loading and error states.

Technical requirements:

- Practise GET, POST, PUT, and DELETE requests.
- Use appropriate request bodies and headers.
- Clearly document that JSONPlaceholder simulates write operations and does not permanently persist changes on its server.
- Local persistence may be considered as a later enhancement.

## 7. Movies

API: TMDB

The feature must:

- Display movie recommendations or popular movies when the Movies tab is first opened.
- Provide a movie search input.
- Display matching search results.
- Display a movie poster when available.
- Display the movie title.
- Display the release date.
- Display an overview or description.
- Display the TMDB rating.
- Display movie revenue when available from the details endpoint.
- Allow the user to inspect important movie information.

Important data limitations:

- TMDB's `vote_average` is a TMDB rating, not an IMDb rating.
- IMDb ratings are not guaranteed to be available through TMDB.
- Box office revenue may be missing or zero for some movies.
- Do not invent missing ratings or revenue.
- An IMDb-specific rating may require a separate data provider in a future enhancement.
- Handle missing posters and missing descriptions gracefully.

Authentication:

- Follow TMDB's current official authentication documentation.
- Never expose a private Bearer token in browser-delivered source code.
- Use a backend proxy if protected credentials are required.

## 8. Pokédex

API: PokéAPI

The feature must:

- Have a dedicated Pokédex-inspired interface.
- Provide a Pokémon name or ID input.
- Provide a search button.
- Display the Pokémon's official artwork or sprite when available.
- Display the Pokémon's name and ID.
- Display its types.
- Display its abilities.
- Display base statistics.
- Display height and weight.
- Present information in an organised Pokédex-style layout.
- Handle invalid Pokémon names and IDs.
- Animate the result reveal subtly.

The visual experience should resemble a digital Pokédex interface while maintaining original design choices.

## 9. Currency Converter

API: Frankfurter

The feature must:

- Display a source currency selector.
- Display a destination currency selector.
- Provide an amount input.
- Provide a convert button.
- Provide a swap button to reverse the selected currencies.
- Display the converted result clearly.
- Display the selected currency codes.
- Validate invalid and empty amounts.
- Handle unsupported currency codes.
- Handle API failures.

The interface should visually distinguish the source and destination currency panels.

## 10. Global UI Requirements

- Use the available screen width and height efficiently.
- Avoid unnecessary blank areas.
- Use consistent spacing and typography.
- Provide clear active and inactive states.
- Use intuitive icons.
- All interactive buttons must have `cursor: pointer`.
- Buttons should have a subtle hover lift or pop effect.
- Button transitions should use approximately 0.5-second CSS transitions.
- Use clear focus states for keyboard interaction.
- Use subtle animations where appropriate.
- Avoid excessive motion.
- Respect reduced-motion preferences where possible.
- Maintain readable contrast.

## 11. Shared Application Behaviour

Every API-powered feature should support:

- Idle state.
- Loading state.
- Success state.
- Empty state where applicable.
- Error state.
- Network failure handling.

Error messages should be understandable to users and should not expose credentials or internal implementation details.

## 12. Technical Requirements

- HTML5.
- CSS3.
- Vanilla JavaScript.
- JavaScript ES Modules.
- Fetch API.
- REST APIs.
- JSON.
- Shared request utility.
- Modular feature files.
- No frontend framework.
- No unnecessary dependencies.

## 13. Scope Boundaries

The initial release is a learning-focused MVP.

The application does not need:

- User accounts.
- Cloud synchronisation.
- A custom database.
- Complex authentication for users.
- Production deployment infrastructure.

Additional capabilities may be considered after the MVP works reliably.
