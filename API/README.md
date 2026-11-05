
# API Hub

A multi-tool web application built with HTML, CSS, and vanilla JavaScript. It integrates multiple public REST APIs into one responsive interface.

## Project Overview

API Hub is a learning-focused project designed to practise real-world API integration, asynchronous JavaScript, HTTP methods, JSON handling, frontend architecture, API testing, and AI-assisted software development.

The application provides seven tools through a shared sidebar interface.

## Features

| Feature  | API             | Planned functionality                                  |
|----------|-----------------|--------------------------------------------------------|
| Weather  | Open-Meteo      | Search cities and view weather information             |
| Quotes   | DummyJSON       | Generate random quotes                                 |
| Jokes    | JokeAPI         | Generate random jokes                                  |
| To-dos   | JSONPlaceholder | Practise todo CRUD operations                          |
| Movies   | TMDB            | Search movies and view their details                   |
| Pokédex  | PokéAPI         | Search Pokémon and view their abilities and statistics |
| Currency | Frankfurter     | Convert between supported currencies                   |
| Pokémon Battle | PokéAPI     | Compare real base statistics over five rounds           |

## Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript
- JavaScript ES Modules
- REST APIs
- Fetch API
- JSON
- Postman
- Git and GitHub
- Cursor AI IDE

## Project Structure

The main HTML, CSS, and JavaScript entry files are kept at the project root.

Supporting JavaScript modules are organised under the `js/` directory. Technical documentation is stored under `docs/`, and Cursor project rules are stored under `.cursor/rules/`.

## Getting Started

1. Install Python 3.10+.
2. Install dependencies with: python -m pip install -r requirements.txt
3. Copy .env.example to .env and set TMDB_READ_ACCESS_TOKEN to a TMDB API Read Access Token. Leave it blank to use every feature except Movies.
4. Start the application with: python -m uvicorn server:app --reload
5. Open http://127.0.0.1:8000.

The FastAPI app serves the frontend and provides only the TMDB proxy. The other providers are called directly from the browser. JSONPlaceholder write operations are simulated by that provider; API Hub keeps those changes visible during the current session.

A local server is recommended because the application uses JavaScript ES Modules.

## API Testing

API endpoints will be tested independently using Postman before their integration into the application.

The Postman collection and testing notes will be maintained in the `postman/` and `docs/` directories.

## Environment Variables and Credentials

Never commit `.env` or private credentials.

The `.env.example` file documents configuration placeholders. A plain browser application does not automatically load `.env` values.

TMDB authentication will be handled according to the project's security design. Private credentials must not be exposed in browser-delivered code.

## Development Principles

- Understand an API before integrating it.
- Test endpoints in Postman first.
- Inspect actual JSON responses.
- Keep features modular.
- Reuse shared utilities.
- Handle loading, empty, and error states.
- Review AI-generated changes before accepting them.
- Test features before marking them complete.
- Commit working changes regularly.

## Project Status

The MVP is implemented with shared request timeouts, loading/error states, responsive navigation, and a five-round Pokémon Battle mini-game. Use docs/API_TESTING.md for verification notes.

## Future Improvements

- Improved responsive design.
- Better accessibility.
- Automated tests.
- Request cancellation and timeout handling.
- Persistent todo storage.
- More API integrations.
- Backend proxy for protected credentials, if required.

## Devloper

Sachin Gowda K

GitHub: https://github.com/SachinK862007
