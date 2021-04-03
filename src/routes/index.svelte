<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api');

		if (res.ok) return { props: { users: await res.json() } };
		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script>
	export let users;
</script>

<main>
	{#each users as { avatar, lastName }}
		<a sveltekit:prefetch href={`/${lastName}`} class="box">
			<img src={avatar} alt={lastName} />
			<h2>{lastName}</h2>
		</a>
	{/each}
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.box {
		padding: 0.25rem;
		margin: 1.5rem;
		color: salmon;
		box-shadow: 4px 5px 11px 2px lightgray;
	}
	.box:hover {
		box-shadow: 4px 5px 11px 10px lightgray;
	}
	img {
		width: 15rem;
		object-fit: contain;
	}
</style>
