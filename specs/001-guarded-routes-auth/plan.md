# Implementation Plan: Guarded Routes and User Authentication

**Branch**: `001-guarded-routes-auth` | **Date**: 2025-11-07 | **Spec**: [spec.md](spec.md)
**Input**: Feature specification from `/specs/001-guarded-routes-auth/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

This plan outlines the implementation of a robust authentication system using Clerk and SvelteKit. The core requirement is to protect the `/hot-take` route from unauthenticated access. The technical approach involves using SvelteKit's file-system-based route groups to create a `(protected)` layout that enforces authentication. Unauthenticated users will be redirected to `/login` or `/sign-up` pages, which will use standard `svelte-clerk` components. A user button will be present on all pages for signed-in users.

## Technical Context

**Language/Version**: TypeScript, Svelte 5
**Primary Dependencies**: SvelteKit, Convex, Clerk, Shadcn-Svelte, Tailwind CSS
**Storage**: Convex (for user profile synchronization)
**Testing**: Manual testing as per constitution. Playwright E2E tests can be added for the authentication flow if needed.
**Target Platform**: Web
**Project Type**: Web Application
**Performance Goals**: Fast redirects; post-login redirect to dashboard within 5 seconds.
**Constraints**: Must adhere to the project constitution. Implementation will follow the patterns in the provided reference repository.
**Scale/Scope**: The initial implementation will support a standard user load. The use of Clerk and Convex allows for significant scaling without architectural changes.

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **I. Clean Code**: **Yes**. The use of route groups and layout-level checks promotes clean, non-repetitive code.
- **II. Simple & Responsive UX**: **Yes**. The plan uses standard Clerk components and a clear redirect flow.
- **III. Svelte 5 Runes & SvelteKit**: **Yes**. The implementation will use modern SvelteKit features as planned.
- **IV. Shadcn-Svelte Components**: **N/A**. While available, this feature primarily uses Clerk's UI components. Shadcn components may be used for page layout (e.g., centering the sign-in form).
- **V. Clerk for Authentication**: **Yes**. Clerk is the exclusive provider for authentication.
- **VI. Convex Backend**: **Yes**. Convex is used for synchronizing user data.
- **VII. Pragmatic Testing**: **Yes**. The plan adheres to the pragmatic testing principle, prioritizing rapid implementation with manual validation.

## Project Structure

### Documentation (this feature)

```text
specs/001-guarded-routes-auth/
├── plan.md              # This file
├── research.md          # Phase 0: Key technical decisions and rationale
├── data-model.md        # Phase 1: Schema for synchronized user data
├── quickstart.md        # Phase 1: Step-by-step implementation guide
└── tasks.md             # Phase 2 output (to be created by /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── hooks.server.ts            # Clerk handle hook integration
├── routes/
│   ├── +layout.server.ts      # Root layout, load user session
│   ├── +layout.svelte         # Root layout, ClerkProvider and UserButton
│   ├── (protected)/
│   │   ├── +layout.server.ts  # Authentication guard/redirect logic
│   │   └── hot-take/
│   │       └── +page.svelte
│   └── (public)/
│       ├── login/
│       │   ├── +page.server.ts # Redirect if already logged in
│       │   └── +page.svelte    # <SignIn> component
│       └── sign-up/
│           ├── +page.server.ts # Redirect if already logged in
│           └── +page.svelte    # <SignUp> component
└── convex/
    ├── users.ts               # Mutation to sync user data
    └── schema.ts              # User table schema
```

**Structure Decision**: The implementation will modify the existing `src/` directory. It will leverage SvelteKit's route groups (`(protected)` and `(public)`) to organize routes and apply authentication logic cleanly. This structure is idiomatic for SvelteKit and directly reflects the security model.

## Complexity Tracking

No constitution violations were identified.
