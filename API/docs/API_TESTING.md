
# API Hub — API Testing Plan

## 1. Testing Objective

Test each external API independently before integrating it into the application.

Postman is used to inspect requests, responses, authentication, status codes, and errors.

Browser testing will be performed separately after implementation.

## 2. Postman Collection

Collection name:

API Hub

Folder structure:

API Hub
|
|-- 01 - Weather
|   |-- Search City
|   |-- Get Current Weather
|
|-- 02 - Quotes
|   |-- Get Random Quote
|
|-- 03 - Jokes
|   |-- Get Random Joke
|
|-- 04 - To-dos
|   |-- Get Todos
|   |-- Get Single Todo
|   |-- Create Todo
|   |-- Update Todo
|   |-- Delete Todo
|
|-- 05 - Movies
|   |-- Popular Movies
|   |-- Search Movies
|   |-- Movie Details
|
|-- 06 - Pokédex
|   |-- Search Pokémon
|
|-- 07 - Currency
    |-- Get Currencies
    |-- Get Exchange Rate

## 3. Postman Environment

Create an environment named:

API Hub - Local

Suggested variables:

- openMeteoGeocodingBaseUrl
- openMeteoForecastBaseUrl
- dummyJsonBaseUrl
- jokeApiBaseUrl
- jsonPlaceholderBaseUrl
- pokeApiBaseUrl
- frankfurterBaseUrl
- tmdbBaseUrl

Authentication secrets should be stored securely and must not be included in a public collection export.

Do not commit populated private environment values.

## 4. Request Testing Procedure

For every request:

1. Select the correct HTTP method.
2. Enter the endpoint.
3. Configure query parameters.
4. Configure headers.
5. Configure authentication if required.
6. Add a request body if needed.
7. Send the request.
8. Inspect the status code.
9. Inspect the response body.
10. Inspect response headers.
11. Record relevant response properties.
12. Save the request in the collection.

## 5. Basic Postman Tests

### Successful GET request

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

### Valid JSON response

pm.test("Response is valid JSON", function () {
    pm.response.json();
});

### Response contains a required property

pm.test("Response contains expected data", function () {
    const data = pm.response.json();

    pm.expect(data).to.have.property("id");
});

The required property must be changed to match the actual API response.

### POST response

For APIs that simulate creation:

pm.test("Creation request succeeded", function () {
    pm.expect(pm.response.code).to.be.oneOf([200, 201]);
});

Do not assume all APIs use the same success status code.

## 6. Test Scenarios

### Normal behaviour

- Valid endpoint.
- Valid query parameters.
- Valid request body.
- Expected authentication.

### Invalid behaviour

- Invalid city.
- Invalid Pokémon.
- Missing movie search query.
- Unsupported currency.
- Invalid or missing authentication.
- Incorrect request body.

### Network behaviour

- Slow connection.
- Connection failure.
- Request timeout where testable.
- Repeated requests.

### Todo CRUD behaviour

- GET collection.
- GET item.
- POST new item.
- PUT existing item.
- DELETE item.

Record the server response and understand the difference between simulated and persistent operations.

## 7. Testing Records

For each tested request, record:

- Request name.
- Request method.
- Request URL.
- Parameters.
- Headers.
- Request body.
- HTTP status.
- Response properties.
- Response time.
- Test result.
- Notes and limitations.

## 8. Final Testing Checklist

- [ ] All selected endpoints tested.
- [ ] Successful responses inspected.
- [ ] Error responses inspected.
- [ ] Relevant properties recorded.
- [ ] Todo methods verified.
- [ ] TMDB authentication verified.
- [ ] Environment variables checked.
- [ ] No real secrets included in exported files.
- [ ] Collection exported.
- [ ] Collection export checked before commit.
# Verification record

The application now uses the following live endpoints:

- Open-Meteo geocoding and forecast: city selection, current weather, hourly data, and timezone=auto.
- DummyJSON quotes: random quote retrieval.
- JokeAPI: safe-mode single and two-part response handling.
- JSONPlaceholder: GET, POST, PUT, and DELETE; writes are simulated.
- PokéAPI: name/ID lookup and artwork/stat mapping.
- Frankfurter v1: currencies and latest conversion rates.
- TMDB: tested through the local FastAPI proxy when TMDB_READ_ACCESS_TOKEN is configured.

JavaScript and Python syntax checks were run locally. Browser interaction and external API availability should be rechecked in the running browser because network access and provider rate limits can vary.
