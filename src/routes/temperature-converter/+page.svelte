<script>
	class Temperature {
		#c = $state(0);
		#f = $state(0);

		get c() {
			return this.#c;
		}
		set c(c) {
			this.#c = c;
			this.#f = c * (9 / 5) + 32;
		}
		get f() {
			return this.#f;
		}
		set f(f) {
			this.#f = f;
			this.#c = (f - 32) * (5 / 9);
		}
	}

	const temp = new Temperature();
</script>

<svelte:head>
	<title>Temperature Converter</title>
</svelte:head>

<div>
	<h1>Temperature Converter</h1>
	<p>A simple temperature converter to check input binding.</p>
	<input type="number" bind:value={temp.c} /> Celsius
	<input type="number" bind:value={temp.f} /> Fareinheit
	<p><a href="../flight-booker">Next Project</a></p>
</div>

<style>
	/* input {
		background-color: hsl(0, 0%, 15%);
		color: hsl(0, 0%, 85%);
		font-size: 1rem;
	} */
</style>
