<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0
- List of modified principles: None
- Added sections:
    - VII. Pragmatic Testing
- Removed sections: None
- Templates requiring updates:
    - ✅ .specify/templates/plan-template.md
    - ✅ .specify/templates/spec-template.md
    - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: None
-->
# Hot Take Room Constitution

## Core Principles

### I. Clean Code
Code should be written for clarity and maintainability. This includes prioritizing early returns (guard clauses) over deeply nested conditional blocks.

### II. Simple & Responsive UX
The user experience must be simple and intuitive. All UI must be fully responsive and built using Tailwind CSS for styling.

### III. Svelte 5 Runes & SvelteKit
All frontend development must use Svelte 5 runes and adhere to the latest SvelteKit best practices. This ensures we are using the most modern and efficient features of the framework.

### IV. Shadcn-Svelte Components
Utilize components from the Shadcn-Svelte library whenever possible. This promotes UI consistency, reduces development time, and maintains a high-quality aesthetic.

### V. Clerk for Authentication
User authentication and session management are to be handled exclusively by Clerk. Refer to the SvelteKit quickstart guide for implementation details.

### VI. Convex Backend
The entire backend, including the database and serverless functions, will be built on the Convex real-time platform. Refer to the official Convex documentation and Svelte integration guides.

### VII. Pragmatic Testing
While testing is important, Test-Driven Development (TDD) is not a requirement at this stage. Focus on manual testing during development and add automated tests (E2E or unit) for critical paths and complex logic as needed. The priority is rapid iteration.

## Technology Stack
The technology stack is fixed to ensure consistency and leverage modern, efficient tools. See the Core Principles for the primary technologies. For specific implementation guidance, refer to the documents in the `/instructions` directory.

## Development Workflow
Development should follow a feature-branch workflow. All new features or bug fixes must be developed in a separate branch and submitted as a pull request for review. Code must adhere to all principles outlined in this constitution.

## Governance
This constitution is the single source of truth for project standards and practices. All code contributions will be evaluated for compliance with these principles. Amendments to this constitution require a pull request and team consensus.

**Version**: 1.1.0 | **Ratified**: 2025-11-07 | **Last Amended**: 2025-11-07
