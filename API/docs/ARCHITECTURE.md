
# API Hub — Architecture

## 1. Architecture Overview

API Hub uses a modular frontend architecture.

The application has:

- A root HTML entry point.
- A root CSS stylesheet.
- A root JavaScript entry point.
- A shared utility module.
- Independent feature modules.
- Project documentation.
- Cursor project rules.
- A Postman API testing collection.

## 2. Root Files

### index.html

Responsibilities:

- Define the application structure.
- Provide the sidebar navigation.
- Provide the main content area.
- Define the feature containers.
- Load the root stylesheet.
- Load the root JavaScript module.

### style.css

Responsibilities:

- Define the visual design system.
- Style the sidebar and navigation.
- Style feature layouts and cards.
- Define interactive states.
- Define transitions and animations.
- Support responsive layouts.

### main.js

Responsibilities:

- Initialise the application.
- Control tab navigation.
- Manage active feature state.
- Connect feature modules to navigation.
- Coordinate shared application behaviour.

## 3. Supporting JavaScript

### js/utils.js

Responsibilities:

- Shared fetch functionality.
- HTTP status handling.
- JSON response parsing.
- Network error handling.
- Request timeouts.
- AbortController support.
- Shared loading and error helpers where appropriate.

### js/features/

Each file owns one feature.

- weather.js
- quotes.js
- jokes.js
- todos.js
- movies.js
- pokedex.js
- currency.js

A feature module should separate:

1. User input handling.
2. API request construction.
3. Response processing.
4. DOM rendering.
5. Error handling specific to that feature.

## 4. Data Flow

The intended data flow is:

User interaction
    ↓
Feature module
    ↓
Shared API utility
    ↓
External API
    ↓
JSON response
    ↓
Feature data processing
    ↓
DOM rendering
    ↓
User interface

The shared utility should not contain feature-specific rendering or business logic.

## 5. API Responsibility

Each feature module should know:

- Which endpoint it uses.
- Which request parameters it requires.
- Which headers are needed.
- Which response properties it uses.
- How its response should be displayed.

The shared utility should manage common transport behaviour rather than deciding what an API response means.

## 6. Module Communication

Use JavaScript ES Modules.

Avoid unnecessary global variables.

Prefer explicit imports and exports.

The main application module should coordinate navigation and feature initialisation. Feature modules should not directly control unrelated features.

## 7. Styling Architecture

The root style.css will contain:

- CSS variables.
- Global reset and base styles.
- App layout.
- Sidebar styling.
- Navigation states.
- Shared buttons and cards.
- Feature-specific styles.
- Responsive breakpoints.
- Animations.

Avoid duplicating identical styles across feature sections.

## 8. Security

- Never commit `.env`.
- Never expose private credentials in browser code.
- Treat all API responses as untrusted input.
- Avoid inserting untrusted API text with unsafe `innerHTML`.
- Prefer `textContent` for plain text.
- Validate user inputs.
- Do not log credentials or tokens.

## 9. Testing

Postman is used to test API behaviour independently.

Browser testing is used to verify the actual application and user interface.

These are different forms of testing and both are required.

## 10. Architecture Changes

Any major architectural change should be documented in DECISIONS.md.

Do not introduce new frameworks or dependencies without a clear reason and review.
