import { mutation } from './_generated/server';
import { v } from 'convex/values';

export const createOrUpdateUser = mutation({
	args: {
		clerkId: v.string(),
		name: v.string(),
		profilePictureUrl: v.optional(v.string())
	},
	handler: async (ctx, args) => {
		const user = await ctx.db
			.query('users')
			.withIndex('by_clerk_id', (q) => q.eq('clerkId', args.clerkId))
			.unique();

		if (user) {
			await ctx.db.patch(user._id, {
				name: args.name,
				profilePictureUrl: args.profilePictureUrl
			});
		} else {
			await ctx.db.insert('users', {
				clerkId: args.clerkId,
				name: args.name,
				profilePictureUrl: args.profilePictureUrl
			});
		}
	}
});
