/**
 * Shared networking utilities.
 *
 * This module is intentionally unused until API integration begins.
 * Feature modules will call these helpers for transport only.
 * They will still build their own URLs and read their own response fields.
 *
 * TODO: export an async request helper that:
 * - accepts a URL and request options
 * - uses fetch
 * - checks response.ok before treating the call as successful
 * - parses JSON
 * - reports HTTP errors, network failures, and invalid JSON
 * - supports a timeout and AbortController
 *
 * Do not put feature-specific rendering or response mapping here.
 * Do not add credentials, tokens, or live requests in this file.
 */
