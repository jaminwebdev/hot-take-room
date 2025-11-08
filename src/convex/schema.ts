import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
	users: defineTable({
		name: v.string(),
		profilePictureUrl: v.optional(v.string()),
		clerkId: v.string()
	}).index('by_clerk_id', ['clerkId'])
});
