---
description: 'Task list template for feature implementation'
---

# Tasks: [FEATURE NAME]

**Input**: Design documents from `/specs/[###-feature-name]/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Automated tests are optional. Include them only for critical paths or complex logic.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **SvelteKit Routes**: `src/routes/`
- **SvelteKit Lib**: `src/lib/`
- **Components**: `src/lib/components/`
- **Convex Functions**: `convex/`
- **Tests**: `tests/` or `e2e/`

<!--
  ============================================================================
  IMPORTANT: The tasks below are SAMPLE TASKS for illustration purposes only.

  The /speckit.tasks command MUST replace these with actual tasks based on:
  - User stories from spec.md (with their priorities P1, P2, P3...)
  - Feature requirements from plan.md
  - Entities from data-model.md
  - Endpoints from contracts/

  Tasks MUST be organized by user story so each story can be:
  - Implemented independently
  - Tested independently
  - Delivered as an MVP increment

  DO NOT keep these sample tasks in the generated tasks.md file.
  ============================================================================
-->

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan
- [ ] T002 Initialize Convex schema in `convex/schema.ts`
- [ ] T003 [P] Configure linting and formatting tools

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T004 Setup Convex schema and migrations framework
- [ ] T005 [P] Implement Clerk authentication helpers and hooks
- [ ] T006 [P] Setup basic SvelteKit routing and layout structure in `src/routes`
- [ ] T007 Create base data models in `convex/schema.ts`
- [ ] T008 Configure error handling and logging infrastructure
- [ ] T009 Setup environment configuration for Clerk and Convex

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - [Title] (Priority: P1) 🎯 MVP

**Goal**: [Brief description of what this story delivers]

### Implementation for User Story 1

- [ ] T012 [P] [US1] Define [Entity1] in `convex/schema.ts`
- [ ] T013 [P] [US1] Create mutation/query for [Entity1] in `convex/myFunctions.ts`
- [ ] T014 [US1] Implement Svelte component `src/lib/components/MyComponent.svelte` (depends on T012, T013)
- [ ] T015 [US1] Implement route for feature in `src/routes/my-feature/+page.svelte`
- [ ] T016 [US1] Add validation and error handling in the component and Convex function
- [ ] T017 [US1] Add logging for user story 1 operations

### Tests for User Story 1 (OPTIONAL)

- [ ] T010 [P] [US1] E2E test for [user journey] in `e2e/test-story-1.spec.ts`
- [ ] T011 [P] [US1] Unit test for [function] in `tests/unit/test-story-1.spec.ts`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - [Title] (Priority: P2)

**Goal**: [Brief description of what this story delivers]

### Implementation for User Story 2

- [ ] T020 [P] [US2] Define [Entity2] in `convex/schema.ts`
- [ ] T021 [US2] Implement Convex function in `convex/myFunctions.ts`
- [ ] T022 [US2] Implement Svelte component in `src/lib/components/MyComponent2.svelte`
- [ ] T023 [US2] Integrate with User Story 1 components (if needed)

### Tests for User Story 2 (OPTIONAL)

- [ ] T018 [P] [US2] E2E test for [user journey] in `e2e/test-story-2.spec.ts`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently
