<script>
	let { children } = $props();
	console.log(children);
</script>

<p>test</p>
<main>
	{@render children()}
</main>
