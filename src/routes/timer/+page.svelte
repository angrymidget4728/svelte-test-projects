<script>
	const title = 'Timer';

	class TimerText {
		// #oldText = $state('00:00:00');
		#text = $state('00:00:00');

		get text() {
			return this.#text;
		}
		set text(t) {
			const isTimerFormat = t.match(/^(\d)?(\d)?:([0-5])?(\d)?:([0-5])(\d)?$/);
			this.#text = isTimerFormat ? t : this.#text;
		}
	}

	const timer = new TimerText();
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div>
	<h1>{title}</h1>
	<p>A simple timer.</p>
	<input type="text" bind:value={timer.text} /> <button>Start timer</button>
	<p>00:00:00</p>
	<p><a href="../timer">Next Project</a></p>
</div>

<style>
</style>
