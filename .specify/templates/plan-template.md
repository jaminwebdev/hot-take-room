# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

**Language/Version**: TypeScript, Svelte 5
**Primary Dependencies**: SvelteKit, Convex, Clerk, Shadcn-Svelte, Tailwind CSS
**Storage**: Convex
**Testing**: Optional (Playwright for E2E, Vitest for unit tests if deemed necessary)
**Target Platform**: Web
**Project Type**: Web Application
**Performance Goals**: Real-time updates, fast page loads
**Constraints**: Must adhere to the project constitution.
**Scale/Scope**: TBD

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **I. Clean Code**: Does the proposed solution favor early returns and avoid deep nesting?
- **II. Simple & Responsive UX**: Is the UI/UX simple, intuitive, and responsive? Is it built with Tailwind CSS?
- **III. Svelte 5 Runes & SvelteKit**: Does the implementation use Svelte 5 runes and follow SvelteKit best practices?
- **IV. Shadcn-Svelte Components**: Are Shadcn-Svelte components used where appropriate?
- **V. Clerk for Authentication**: Is Clerk used for all authentication?
- **VI. Convex Backend**: Is Convex used for the backend and database?
- **VII. Pragmatic Testing**: Is the testing approach appropriate for the feature's complexity and criticality?

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
# [REMOVE IF UNUSED] Option 1: Single project (DEFAULT)
src/
├── models/
├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
└── tests/

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)
api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
