# Quickstart & Implementation Guide: Guarded Routes

This guide outlines the steps to implement the guarded routes feature.

## 1. Environment Setup

- Ensure you have Clerk and Convex environment variables set up in your `.env.local` file. This includes your Clerk publishable key, secret key, and your Convex deployment URL.

## 2. Create Route Groups

- In `src/routes`, create a new route group named `(protected)`. This will house all routes that require authentication.
- In `src/routes`, create another route group named `(public)`. This will house routes like `/login` and `/sign-up`.
- Move the `/hot-take` route into the `src/routes/(protected)` directory.

## 3. Implement Server-Side Guard

- Create a `src/routes/(protected)/+layout.server.ts` file.
- In this file, get the current user's session from Clerk.
- If the user is not authenticated (i.e., `sessionClaims` is null), redirect them to the `/login` page using the `redirect` helper from `@sveltejs/kit`.
- Load the `sessionClaims` and pass them to the `+layout.svelte` file.

## 4. Create Public Authentication Routes

- Create a `/login` route inside `src/routes/(public)`. The full path will be `src/routes/(public)/login/+page.svelte`.
- Inside this page, use the `<SignIn>` component from `svelte-clerk`. Set the `afterSignInUrl` to `/`.
- Create a `/sign-up` route inside `src/routes/(public)`. The full path will be `src/routes/(public)/sign-up/+page.svelte`.
- Inside this page, use the `<SignUp>` component from `svelte-clerk`. Set the `afterSignUpUrl` to `/`.

## 5. Handle Authenticated Users on Public Pages

- In `src/routes/(public)/login/+page.server.ts` and `src/routes/(public)/sign-up/+page.server.ts`, add a check for an authenticated user.
- If the user is already signed in, redirect them to the `/` page.

## 6. Add the User Button to the Main Layout

- Open the root `src/routes/+layout.svelte` file.
- Import the `<UserButton>` component from `svelte-clerk`.
- Add the `<UserButton>` component to the top-right corner of the layout, likely in the header. Use `showName` prop for a better UX.
- Wrap the entire layout in the `<ClerkProvider>` component, passing in the `sessionClaims` from the `+layout.server.ts` file.

## 7. Convex User Synchronization

- Create a new Convex mutation in a `users.ts` file (e.g., `createOrUpdateUser`).
- This mutation will take the user's Clerk ID, name, and profile picture URL as arguments.
- It will use `query("users").withIndex("by_clerk_id", q => q.eq("clerkId", args.clerkId))` to check if the user already exists.
- If the user exists, update their details. If not, create a new user record.
- Call this mutation from the `(protected)/+layout.server.ts` after a user is confirmed to be authenticated. This ensures user data is fresh on every session start.

## 8. Update `hooks.server.ts`

- The `hooks.server.ts` file needs to be configured to use the Clerk `handle` hook. This will make the Clerk session information available throughout the server-side of the application.

By following these steps, all functional and non-functional requirements from the specification will be met.
