
# Contributing Guide

## Development Principles

API Hub is developed using a learning-first engineering workflow.

The developer is responsible for understanding, testing, and reviewing every change, including AI-generated code.

## Before Implementing a Feature

1. Read the relevant project requirements.
2. Read the official API documentation.
3. Identify the endpoint, method, parameters, headers, and authentication requirements.
4. Test the API request independently in Postman.
5. Inspect the actual response.
6. Plan the implementation before editing files.

## Implementation Rules

- Use vanilla JavaScript.
- Use ES Modules.
- Keep feature-specific code inside `js/features/`.
- Reuse shared functionality from `js/utils.js`.
- Separate API requests, data processing, and DOM rendering.
- Avoid unnecessary dependencies.
- Do not modify unrelated features.

## Testing Rules

- Test successful requests.
- Test invalid inputs.
- Test API errors.
- Test network failures.
- Test loading and empty states.
- Verify the feature in the browser.

## AI-Assisted Development

Cursor may be used for exploration, planning, implementation, debugging, refactoring, and reviews.

However:

- Review proposed implementation plans.
- Inspect generated code.
- Review file changes and Git diffs.
- Do not accept unexplained architectural changes.
- Do not claim tests passed unless they were actually run.
- Never provide private credentials to an AI prompt unnecessarily.

## Git Workflow

Use small, meaningful commits.

Suggested commit prefixes:

- `feat:` New functionality
- `fix:` Bug fixes
- `docs:` Documentation changes
- `refactor:` Code restructuring
- `test:` Test additions or updates
- `chore:` Project maintenance

## Definition of Done

A feature is complete only when:

- Its requirements are satisfied.
- Its API request has been tested.
- Its response is handled correctly.
- Loading and error states work.
- Browser behaviour has been verified.
- Documentation has been updated.
- Changes have been reviewed and committed.
