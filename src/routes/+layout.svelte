<script>
	import '../app.css';
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	/* :root {
		background-color: hsl(0, 0%, 12%);
		font-family:
			Source Serif Pro,
			Cambria,
			Cochin,
			Georgia,
			Times,
			'Times New Roman',
			serif;
		color: hsl(0, 0%, 85%);
		font-size: 1.25rem;
	} */
</style>
