# Tasks: Guarded Routes and User Authentication

This task list is generated from the feature specification and implementation plan. It is designed to be executed sequentially by an AI agent to deliver the feature.

## Phase 1: Setup

- [x] T001 Verify Clerk and Convex environment variables are present in a `.env` or similar file.

## Phase 2: Foundational Backend & Frontend Integration

- [x] T002 Update the Convex schema to include the `users` table in `convex/schema.ts`.
- [x] T003 Configure the Clerk `handle` hook in `src/hooks.server.ts` to enable session access.
- [x] T004 [P] In the root `src/routes/+layout.server.ts`, load the `sessionClaims` from Clerk.
- [x] T005 [P] In the root `src/routes/+layout.svelte`, wrap the main content in a `<ClerkProvider>` and pass the `data.sessionClaims`.

## Phase 3: User Story 1 - Unauthenticated User is Redirected

**Goal**: As an unauthenticated user, when I try to access the `/hot-take` page, I want to be redirected to a login page.
**Independent Test**: An unauthenticated session attempting to navigate directly to `/hot-take` should result in the browser's URL changing to `/login`.

- [x] T006 [US1] Create a new route group directory: `src/routes/(protected)`.
- [x] T007 [US1] Create a new route group directory: `src/routes/(public)`.
- [x] T008 [US1] Move the existing `/hot-take` route directory into `src/routes/(protected)/`.
- [x] T009 [US1] Create a `+layout.server.ts` file inside `src/routes/(protected)/`.
- [x] T010 [US1] In `src/routes/(protected)/+layout.server.ts`, add logic to check for an authenticated user. If the user is not authenticated, redirect to `/login`.

## Phase 4: User Story 2 - User Sign-Up

**Goal**: As a new user, I want to be able to create an account from the `/sign-up` page and then be taken to the main dashboard page.
**Independent Test**: A user can fill out the sign-up form, successfully create an account, and land on the `/` page.

- [x] T011 [US2] Create the sign-up page directory: `src/routes/(public)/sign-up/`.
- [x] T012 [US2] Create the sign-up page file: `src/routes/(public)/sign-up/+page.svelte`.
- [x] T013 [US2] In `src/routes/(public)/sign-up/+page.svelte`, add the `<SignUp>` component from `svelte-clerk` with `afterSignUpUrl` set to `/`.

## Phase 5: User Story 3 - User Sign-In

**Goal**: As a returning user, I want to be able to sign in from the `/login` page and be taken to the main dashboard page.
**Independent Test**: A user with an existing account can enter their credentials on the `/login` page, sign in, and land on the `/` page.

- [x] T014 [US3] Create the login page directory: `src/routes/(public)/login/`.
- [x] T015 [US3] Create the login page file: `src/routes/(public)/login/+page.svelte`.
- [x] T016 [US3] In `src/routes/(public)/login/+page.svelte`, add the `<SignIn>` component from `svelte-clerk` with `afterSignInUrl` set to `/`.

## Phase 6: User Story 4 - Authenticated User Profile Button

**Goal**: As a signed-in user, I want to see a user profile button in the top right corner of every page.
**Independent Test**: After signing in, navigating to any page shows the user profile button in the top right.

- [x] T017 [US4] In the root `src/routes/+layout.svelte`, import and add the `<UserButton>` component to the page header.

## Phase 7: Polish & Cross-Cutting Concerns

- [x] T018 Create a `+page.server.ts` file in `src/routes/(public)/login/` to redirect authenticated users to `/`.
- [x] T019 Create a `+page.server.ts` file in `src/routes/(public)/sign-up/` to redirect authenticated users to `/`.
- [x] T020 Create a new Convex file `convex/users.ts` for the user synchronization mutation.
- [x] T021 In `convex/users.ts`, implement the `createOrUpdateUser` mutation as defined in `data-model.md`.
- [x] T022 In `src/routes/(protected)/+layout.server.ts`, call the `createOrUpdateUser` mutation after confirming the user is authenticated.
- [x] T023 Create a root error handler file at `src/routes/+error.svelte`.
- [x] T024 In `src/routes/+error.svelte`, check if the error message indicates a Clerk service outage and display a user-friendly "Service Unavailable" message.
- [x] T025 In `src/routes/+error.svelte`, add a "Try Again" button that reloads the page when the Clerk error is present.

---

## Dependencies & Parallel Execution

- **Story Dependencies**: US2 (Sign-Up) and US3 (Sign-In) are prerequisites for US1 (Redirect) to be fully testable, as you need a way to log in to test the authenticated state. US4 (User Button) can be implemented after US1.
- **Execution Order**: It is recommended to follow the phases sequentially. However, within phases, some tasks are marked with `[P]` and can be parallelized.

### Parallel Opportunities

- **Phase 2**: T004 and T005 can be done in parallel.
- **User Stories**: The creation of the sign-up (US2) and sign-in (US3) pages are independent of each other and could be worked on in parallel.

## Implementation Strategy

The strategy is to first establish the foundational authentication setup, then implement the user stories one by one, starting with the highest priority. The MVP is the complete authentication flow: sign-up, sign-in, and a guarded route.

- **MVP**: Complete User Stories 1, 2, and 3.
- **Post-MVP**: Implement User Story 4 and the final polish tasks.
