<script>
	let count = $state(0);
</script>

<svelte:head>
	<title>Counter</title>
</svelte:head>

<div>
	<h1>Counter</h1>
	<p>
		The age old counter app. It is an attempt to build the simplest project from the ground up
		rather than copying a tutorial.
	</p>
	<button onclick={() => count++}>Count: {count}</button>
	<p><a href="../temperature-converter">Next Project</a></p>
</div>
