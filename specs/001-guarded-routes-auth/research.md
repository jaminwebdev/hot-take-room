# Research & Decisions for Guarded Routes

## Decision: Use SvelteKit Route Groups for Protection

- **Decision**: We will use SvelteKit's advanced layout feature, specifically route groups, to protect routes. A `(protected)` group will be created.
- **Rationale**: This aligns with the user's explicit direction and is a standard SvelteKit pattern for applying different layouts or logic to a subset of routes. It's cleaner than adding checks to every page. The reference repository confirms this is a viable and clean approach.
- **Alternatives Considered**:
  - **Per-page checks**: Adding authentication checks to each `+page.server.ts` or `+layout.server.ts` would be repetitive and error-prone.
  - **Hooks only**: While `hooks.server.ts` can intercept requests, managing a list of protected routes there can become cumbersome. Route groups provide a more declarative, file-system-based approach.

## Decision: Server-Side Redirects in `+layout.server.ts`

- **Decision**: Redirection logic for unauthenticated users will be placed in the `+layout.server.ts` file within the `(protected)` route group.
- **Rationale**: This is the earliest point in the SvelteKit request lifecycle on the server where we can check authentication and redirect. It prevents any part of the protected page from rendering, which is secure and efficient. The reference implementation uses this exact pattern.
- **Alternatives Considered**:
  - **Client-side redirects**: Relying only on client-side checks (e.g., in a `+layout.svelte` file) is not secure. The page data would still be loaded, and a savvy user could intercept it. We will use client-side components for UX (like `<SignedOut>`), but the primary security is server-side.

## Decision: Use Clerk Svelte Components for UI

- **Decision**: The UI for sign-in, sign-up, and the user button will be implemented using the official Clerk Svelte components: `<SignIn>`, `<SignUp>`, and `<UserButton>`.
- **Rationale**: This is required by the constitution and the user's request. It's the fastest and most reliable way to implement the authentication UI, as Clerk handles all the complexity of the authentication flow, including multi-factor authentication and social logins.
- **Alternatives Considered**:
  - **Custom UI**: Building a custom UI that talks to the Clerk API would be time-consuming and add unnecessary complexity.

## Decision: Redirect to `/` after Login/Signup

- **Decision**: After a successful login or sign-up, users will be redirected to the main dashboard page (`/`).
- **Rationale**: This was clarified in the spec. It provides a consistent user experience. Clerk's components support the `afterSignInUrl` and `afterSignUpUrl` props to handle this easily.
- **Alternatives Considered**:
  - **Redirect to original destination**: While a common pattern, the spec explicitly decided against this for simplicity.

## Decision: Handle Signed-In Users on Public Auth Pages

- **Decision**: If an already authenticated user navigates to `/login` or `/sign-up`, they will be redirected to the main dashboard (`/`).
- **Rationale**: This is a standard UX pattern defined in the spec's edge cases. It prevents confusion. This can be handled with a server-side check in the respective `+page.server.ts` files for those routes.
- **Alternatives Considered**:
  - **Showing the page anyway**: This would be confusing for the user. Why would they need to log in if they are already logged in?
