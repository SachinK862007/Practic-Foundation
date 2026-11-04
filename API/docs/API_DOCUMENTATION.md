
# API Hub — API Documentation

## Purpose

This document records the external APIs used by API Hub.

Every endpoint must be tested in Postman before being integrated into the application.

Record actual response properties rather than guessing their names.

---

# 1. Weather — Open-Meteo

Official documentation:
https://open-meteo.com/en/docs

Geocoding API:
https://open-meteo.com/en/docs/geocoding-api

Purpose:

Search for a city and retrieve its current weather information.

Planned API requests:

### City Search

Method: GET

Candidate endpoint:

https://geocoding-api.open-meteo.com/v1/search

Expected query parameters to investigate:

- name
- count
- language
- format

Information required:

- City name
- Country name
- Latitude
- Longitude
- Time zone where available

### Current Weather

Method: GET

Base endpoint:

https://api.open-meteo.com/v1/forecast

Expected parameters to investigate:

- latitude
- longitude
- current
- timezone

Weather properties to investigate:

- temperature_2m
- relative_humidity_2m
- apparent_temperature
- is_day
- precipitation
- weather_code
- wind_speed_10m

Postman verification:

- [ ] City search works.
- [ ] City coordinates are returned.
- [ ] Weather request accepts coordinates.
- [ ] Current weather fields are present.
- [ ] Invalid city handling is understood.
- [ ] Units and timezone behaviour are understood.

Response notes:

To be completed after Postman testing.

---

# 2. Quotes — DummyJSON

Official documentation:
https://dummyjson.com/docs/quotes

Purpose:

Retrieve a random quote.

Method: GET

Candidate endpoint:

https://dummyjson.com/quotes/random

Required response properties to investigate:

- id
- quote
- author

Postman verification:

- [ ] Random quote request works.
- [ ] Quote text is present.
- [ ] Author is present.
- [ ] Response structure is understood.

Response notes:

To be completed after Postman testing.

---

# 3. Jokes — JokeAPI

Official documentation:
https://v2.jokeapi.dev/

Purpose:

Retrieve safe random jokes.

Method: GET

Candidate endpoint:

https://v2.jokeapi.dev/joke/Any?safe-mode

Response behaviour to investigate:

Single-part jokes:

- type
- joke

Two-part jokes:

- type
- setup
- delivery

Other properties to investigate:

- error
- category
- flags

Postman verification:

- [ ] Single-part response tested.
- [ ] Two-part response tested.
- [ ] Safe mode tested.
- [ ] Error response understood.
- [ ] Rendering logic requirements documented.

Response notes:

To be completed after Postman testing.

---

# 4. To-dos — JSONPlaceholder

Official documentation:
https://jsonplaceholder.typicode.com/guide/

Purpose:

Practise CRUD operations using HTTP methods.

### Retrieve all todos

Method: GET

https://jsonplaceholder.typicode.com/todos

### Retrieve one todo

Method: GET

https://jsonplaceholder.typicode.com/todos/1

### Create a todo

Method: POST

https://jsonplaceholder.typicode.com/todos

Example JSON body:

{
  "title": "Learn REST APIs",
  "completed": false,
  "userId": 1
}

Required header:

Content-Type: application/json

### Update a todo

Method: PUT

https://jsonplaceholder.typicode.com/todos/1

Example JSON body:

{
  "id": 1,
  "title": "Understand REST APIs",
  "completed": true,
  "userId": 1
}

Required header:

Content-Type: application/json

### Delete a todo

Method: DELETE

https://jsonplaceholder.typicode.com/todos/1

Important limitation:

JSONPlaceholder simulates write operations. POST, PUT, PATCH and DELETE return simulated responses without permanently changing the server's underlying example data.

Postman verification:

- [ ] GET collection tested.
- [ ] GET single item tested.
- [ ] POST tested.
- [ ] PUT tested.
- [ ] DELETE tested.
- [ ] Request body formats understood.
- [ ] Response status codes recorded.
- [ ] Simulated persistence limitation understood.

Response notes:

To be completed after Postman testing.

---

# 5. Movies — TMDB

Official documentation:
https://developer.themoviedb.org/docs/getting-started

Purpose:

Search movies and retrieve movie information.

Authentication:

TMDB supports application authentication with an API key or API Read Access Token.

Do not expose private credentials in browser-delivered code.

### Movie Search

Method: GET

Candidate endpoint:

https://api.themoviedb.org/3/search/movie

Query parameters to investigate:

- query
- page
- include_adult

Authentication headers to investigate:

Authorization: Bearer YOUR_ACCESS_TOKEN

### Popular Movies

Method: GET

Candidate endpoint:

https://api.themoviedb.org/3/movie/popular

### Movie Details

Method: GET

Candidate endpoint:

https://api.themoviedb.org/3/movie/{movie_id}

Information to investigate:

- title
- overview
- release_date
- poster_path
- vote_average
- vote_count
- revenue

Important limitations:

- vote_average represents the TMDB rating, not necessarily IMDb.
- revenue requires movie details and may be absent or zero.
- Poster URLs require the appropriate TMDB image base URL and image size.
- Do not invent missing movie information.
- Protect credentials according to the chosen application architecture.

Postman verification:

- [ ] Authentication tested.
- [ ] Search request tested.
- [ ] Popular movies request tested.
- [ ] Movie details request tested.
- [ ] Image URL construction understood.
- [ ] Missing movie results handled.
- [ ] Credential storage approach documented.

Response notes:

To be completed after Postman testing.

---

# 6. Pokédex — PokéAPI

Official documentation:
https://pokeapi.co/docs/v2

Purpose:

Search Pokémon and display their properties.

Method: GET

Candidate endpoint:

https://pokeapi.co/api/v2/pokemon/{name-or-id}

Response properties to investigate:

- id
- name
- height
- weight
- sprites
- types
- abilities
- stats
- cries

Postman verification:

- [ ] Name search tested.
- [ ] ID search tested.
- [ ] Sprite properties inspected.
- [ ] Types inspected.
- [ ] Abilities inspected.
- [ ] Statistics inspected.
- [ ] Invalid Pokémon response handled.
- [ ] Nested JSON structures understood.

Response notes:

To be completed after Postman testing.

---

# 7. Currency — Frankfurter

Official documentation:
https://frankfurter.dev/

Purpose:

Retrieve exchange rates and convert currency amounts.

Candidate endpoint:

https://api.frankfurter.dev/v2/rates

Method: GET

Query parameters to investigate:

- base
- quotes
- date where supported

Candidate currencies endpoint:

https://api.frankfurter.dev/v2/currencies

Information to investigate:

- base currency
- quote currency
- exchange rate
- date

Postman verification:

- [ ] Exchange rate request tested.
- [ ] Currency list request tested.
- [ ] Base currency behaviour understood.
- [ ] Unsupported currency handling tested.
- [ ] Historical rate behaviour investigated.
- [ ] Conversion calculation verified.

Response notes:

To be completed after Postman testing.

---

# API Integration Record

For every verified endpoint, record:

- API name.
- Endpoint.
- HTTP method.
- Required parameters.
- Required headers.
- Authentication type.
- Example request.
- Example successful response.
- Relevant response properties.
- Possible errors.
- Known limitations.
- Postman test result.
- Date verified.

Do not mark an endpoint as verified until an actual request has been sent and its response inspected.
