# Feature Specification: Guarded Routes and User Authentication

**Feature Branch**: `001-guarded-routes-auth`
**Created**: 2025-11-07
**Status**: Draft
**Input**: User description: "The /hot-take route should be a guarded route. Users that aren't signed in should be redirected where they're presented with a svelte-clerk <SignUp> or <SignIn> component depending on the route they're on. There should be a /sign-up route for signing up, and a /login route for signing in. Once signed in, a user should be taken back /hot-take route. Once signed in, there should also be a <UserButton> svelte-clerk component fixed to the top right corner of all pages/routes. If routes under a protected route group can be guarded in hooks.server.ts, do so. If not, one can take the approach outlined in this codebase on github, where redirections happen through a combination of +layout.server.ts files within certain route groups, and via Svelte-Clerk helpers like <SignedOut><SignUp></SignedOut> and <SignedIn><Redirect route="/"/></SignedIn> as a client-side check for the sign-up page (as an example). see this repo for a working example: https://github.com/jaminwebdev/sveltekit-convex-clerk-template"

## Clarifications

### Session 2025-11-07

- Q: Should the redirect _always_ go to `/hot-take`, or should it redirect the user to the page they were originally trying to access before being prompted to log in? → A: Always redirect to a generic dashboard/home page (e.g., `/`) after login/signup.
- Q: How should the application behave if the Clerk service is unavailable or fails to respond? → A: Display a dedicated error page (e.g., "Service Unavailable") with a "try again" button.
- Q: To ensure a secure-by-default posture, how should new routes be treated? → A: Routes are protected by being placed within a designated 'protected' group. Routes outside this group are considered public.
- Q: How should the system handle a potential redirect loop? → A: Rely on the browser's built-in redirect loop detection (e.g., "ERR_TOO_MANY_REDIRECTS").
- Q: What user data from Clerk should be synchronized and stored in our local database? → A: Synchronize only the user's ID, name, and profile picture URL.

## User Scenarios & Testing _(optional)_

### User Story 1 - Unauthenticated user is redirected (Priority: P1)

As an unauthenticated user, when I try to access the `/hot-take` page, I want to be redirected to a login page so that I can sign in or sign up.

**Why this priority**: This is the core of the feature, preventing unauthorized access.
**Independent Test**: An unauthenticated session attempting to navigate directly to `/hot-take` should result in the browser's URL changing to `/login`.

**Acceptance Scenarios**:

1. **Given** I am not signed in, **When** I navigate to `/hot-take`, **Then** I am redirected to `/login`.

### User Story 2 - User Sign-Up (Priority: P1)

As a new user, I want to be able to create an account from the `/sign-up` page and then be taken to the main dashboard page.

**Why this priority**: Allows new users to join the application.
**Independent Test**: A user can fill out the sign-up form, successfully create an account, and land on the `/` page.

**Acceptance Scenarios**:

1. **Given** I am on the `/sign-up` page, **When** I fill in my details and submit the form, **Then** my account is created and I am redirected to `/`.

### User Story 3 - User Sign-In (Priority: P1)

As a returning user, I want to be able to sign in from the `/login` page and be taken to the main dashboard page.

**Why this priority**: Allows existing users to access the application.
**Independent Test**: A user with an existing account can enter their credentials on the `/login` page, sign in, and land on the `/` page.

**Acceptance Scenarios**:

1. **Given** I am on the `/login` page, **When** I enter my correct credentials and submit, **Then** I am signed in and redirected to `/`.

### User Story 4 - Authenticated User Profile Button (Priority: P2)

As a signed-in user, I want to see a user profile button in the top right corner of every page so that I can manage my account.

**Why this priority**: Provides a consistent way for users to access their profile and sign out.
**Independent Test**: After signing in, navigating to any page in the application shows the user profile button in the top right.

**Acceptance Scenarios**:

1. **Given** I am signed in, **When** I navigate to any page, **Then** a user profile button is visible in the top-right corner.

### Edge Cases

- What happens if a user is already signed in and navigates to `/login` or `/sign-up`? They should be redirected to the main dashboard page (`/`).
- How does the system handle incorrect login credentials? It should display an error message without redirecting.
- What happens if the post-sign-in redirect fails? The user should be taken to the main dashboard page (`/`).
- If the external authentication service (Clerk) is unavailable, the system MUST display a dedicated error page (e.g., "Service Unavailable") with an option to try again.
- In the event of a redirect loop, the system will rely on the browser's built-in redirect loop detection (e.g., "ERR_TOO_MANY_REDIRECTS").

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The `/hot-take` route MUST be protected from unauthenticated access.
- **FR-002**: Unauthenticated users attempting to access a guarded route MUST be redirected to the `/login` page.
- **FR-003**: A `/login` route MUST exist and present users with a method to sign in.
- **FR-004**: A `/sign-up` route MUST exist and present users with a method to create a new account.
- **FR-005**: Upon successful sign-in or sign-up, the user MUST be redirected to the main dashboard page (`/`).
- **FR-006**: For authenticated users, a user profile button MUST be displayed in a fixed position in the top-right corner of all pages.
- **FR-007**: System MUST use Clerk for all authentication functionalities.
- **FR-008**: Routes requiring authentication MUST be organized into a designated 'protected' group. Routes outside this group are public by default.

### Key Entities _(include if feature involves data)_

- **User**: Represents a synchronized copy of a user from the authentication service.
  - **Attributes**:
    - `userId` (string): The unique identifier from Clerk. This is the primary key.
    - `name` (string): The user's full name.
    - `profilePictureUrl` (string): The URL for the user's profile picture.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: 100% of unauthenticated requests to `/hot-take` are redirected to `/login`.
- **SC-002**: New users can complete the sign-up process and are redirected to `/` within 10 seconds of submitting the form.
- **SC-003**: Existing users can complete the sign-in process and are redirected to `/` within 5 seconds of submitting the form.
- **SC-004**: The user profile button is present on 100% of page loads for authenticated users.
