
# Postman — API Hub

This directory contains the Postman collection and related API testing resources.

## Collection

Collection name:

API Hub

The collection should contain folders for:

1. Weather
2. Quotes
3. Jokes
4. To-dos
5. Movies
6. Pokédex
7. Currency

## Environment

Environment name:

API Hub - Local

Use environment variables for reusable base URLs and configuration.

Do not export private credentials into a public environment file.

## Testing Workflow

1. Read the API documentation.
2. Create the request in Postman.
3. Configure method, URL, parameters, headers, authentication, and body.
4. Send the request.
5. Inspect the status and response.
6. Add relevant test assertions.
7. Save the request.
8. Record observations in docs/API_DOCUMENTATION.md.
9. Record test results in docs/API_TESTING.md.

## Exporting

Export the Postman collection as:

API-Hub.postman_collection.json

Before committing the export:

- Check that no access token is included.
- Check that no API secret is included.
- Remove private environment values.
- Verify that the collection can be imported.

The Postman collection is part of the project's technical documentation.
