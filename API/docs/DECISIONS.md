
# API Hub — Architecture Decision Records

This document records important project decisions and their reasoning.

---

## ADR-001: Use Vanilla JavaScript

Status: Accepted

Decision:

Use HTML, CSS, and vanilla JavaScript instead of a frontend framework.

Reason:

The primary learning objective is to understand JavaScript, REST APIs, DOM manipulation, asynchronous programming, and modular application architecture.

---

## ADR-002: Keep Main Files at the Project Root

Status: Accepted

Decision:

Keep these files at the project root:

- index.html
- style.css
- main.js

Reason:

The developer wants the main entry files to remain visible and easy to access.

Supporting modules will be organised into subdirectories.

---

## ADR-003: Use JavaScript ES Modules

Status: Accepted

Decision:

Use import and export to organise JavaScript functionality.

Reason:

This provides modularity without introducing a framework or build system.

---

## ADR-004: Use a Shared Fetch Utility

Status: Accepted

Decision:

Create a shared request utility in js/utils.js.

Reason:

Common request behaviour should not be duplicated across seven feature modules.

The utility should manage common networking behaviour, while feature-specific response processing remains inside each feature.

---

## ADR-005: Test APIs in Postman Before Implementation

Status: Accepted

Decision:

Test every API endpoint independently before integrating it.

Reason:

The developer should understand endpoints, HTTP methods, parameters, authentication, response structures, and errors before writing application code.

---

## ADR-006: Use Cursor Project Rules

Status: Accepted

Decision:

Use version-controlled .mdc files in .cursor/rules/.

Reason:

Persistent project instructions should guide AI-assisted development and reduce repeated mistakes.

---

## ADR-007: Keep Private Credentials Out of Git

Status: Accepted

Decision:

Ignore .env and never commit private credentials.

Reason:

Prevent accidental credential exposure through a public repository.

The frontend must not be treated as a secure location for private API credentials.

---

## ADR-008: Use JSONPlaceholder for CRUD Practice

Status: Accepted

Decision:

Use JSONPlaceholder to practise GET, POST, PUT, and DELETE.

Reason:

It provides a simple environment for understanding HTTP methods and request bodies.

Limitation:

Its simulated writes are not permanently persisted.

---

## Future Decisions

Record future architectural changes here.

For each decision include:

- Decision title.
- Status.
- Context.
- Decision.
- Reason.
- Consequences.
