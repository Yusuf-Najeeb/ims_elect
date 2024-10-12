/**
 * An array of routes that are accessible to the public
 * These are routes that do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/", "/auth/new-verification"];

/**
 * An array of routes which is used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

/**
 * Prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logged in
 * All authenticated users will be redirected to /settings
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
