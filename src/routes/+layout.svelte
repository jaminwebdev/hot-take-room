<script lang="ts">
	import '../app.css';
	import { ClerkProvider, UserButton } from 'svelte-clerk';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	type Props = {
		children: Snippet;
		data: LayoutData;
	};

	const { children, data }: Props = $props();
	setupConvex(PUBLIC_CONVEX_URL);
</script>

<ClerkProvider {...data}>
	<header class="flex justify-end p-4">
		<UserButton afterSignOutUrl="/" />
	</header>
	<main>
		{@render children()}
	</main>
</ClerkProvider>
