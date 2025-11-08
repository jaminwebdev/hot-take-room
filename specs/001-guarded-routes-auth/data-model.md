# Data Model for Guarded Routes

This feature does not introduce new database tables that this application owns. The user data is owned and managed by Clerk.

## External Entities

### User (from Clerk)

The user entity is managed by Clerk. When a user signs up, Clerk creates a new user record. We will synchronize a minimal subset of this data into our Convex database for application use, as defined in the feature specification.

- **Source**: Clerk Authentication Service
- **Synchronization**: A Convex `users` table will store a reference to the Clerk user. This can be populated via a Convex HTTP endpoint that Clerk calls via webhooks, or created on-demand when a user first hits the application. For this feature, we will assume an on-demand creation/update via a Convex mutation that is called from our SvelteKit frontend.

### `users` table in Convex

- **`_id`**: Convex's built-in document ID.
- **`clerkId`** (string): The user's unique ID from Clerk. This will be used to look up users. This field should be indexed for efficient queries.
- **`name`** (string): The user's full name.
- **`profilePictureUrl`** (string, optional): The URL for the user's profile picture.

### Example `users` table schema in `convex/schema.ts`:

```typescript
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	users: defineTable({
		name: v.string(),
		profilePictureUrl: v.optional(v.string()),
		clerkId: v.string()
	}).index('by_clerk_id', ['clerkId'])
});
```
