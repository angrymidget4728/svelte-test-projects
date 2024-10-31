<script>
	// import FlightDates from './FlightDates.js';
	const title = 'Flight Booker';

	function getDate() {
		const date = new Date();
		const [month, day, year] = date
			.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
			.split('/');
		return `${year}-${month}-${day}`;
	}

	class FlightDates {
		#depDate = $state();
		#retDate = $state();

		/**
		 * @param {string} depDate
		 * @param {string} retDate
		 */
		constructor(depDate, retDate) {
			this.#depDate = depDate;
			this.#retDate = retDate;
		}

		get depDate() {
			return this.#depDate;
		}
		set depDate(d) {
			this.#depDate = d;
			if (this.#depDate > this.#retDate) {
				this.#retDate = this.#depDate;
			}
		}
		get retDate() {
			return this.#retDate;
		}
		set retDate(r) {
			this.#retDate = r;
		}
	}

	// const fTypes = ['One way', 'Two way'];
	// let fType = $state(fTypes[0]);
	let isTwoWay = $state(false);
	const f = new FlightDates(getDate(), getDate());

	/**
	 * @param {Event} e
	 */
	function handleSubmit(e) {
		e.preventDefault();
		alert(
			`You have selected a ${isTwoWay ? 'two way' : 'one way'} flight for [${f.depDate}]${isTwoWay ? ` to [${f.retDate}]` : ''}.`
		);
	}
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div>
	<h1>{title}</h1>
	<p>A conditional date selector where you can only put in valid dates</p>
	<form onsubmit={handleSubmit} class="grid-container">
		<select bind:value={isTwoWay} class="grid-item-1">
			<option value={false}>One way</option>
			<option value={true}>Two way</option>
		</select>
		<span class="grid-item-2">Departure Date:</span>
		<input class="grid-item-3" type="date" bind:value={f.depDate} min={getDate()} />
		<span class="grid-item-4">Return Date:</span>
		<input
			class="grid-item-5"
			type="date"
			bind:value={f.retDate}
			disabled={!isTwoWay}
			min={f.depDate}
		/>
		<button class="grid-item-6" type="submit">Book</button>
	</form>
	<p><a href="../timer">Next Project</a></p>
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto auto auto;
		width: 350px;
		gap: 5px;
	}

	.grid-item-1,
	.grid-item-6 {
		grid-column: 1/3;
	}

	.grid-item-2,
	.grid-item-4 {
		grid-column: 1/2;
	}
</style>
