<script lang="ts">
	import { page } from '$app/stores';

	function reload() {
		location.reload();
	}
</script>

{#if $page.error?.message.includes('clerk')}
	<h1>Service Unavailable</h1>
	<p>Our authentication service is currently unavailable. Please try again later.</p>
	<button on:click={reload}>Try Again</button>
{:else}
	<h1>{$page.status}</h1>
	<p>{$page.error?.message}</p>
{/if}
