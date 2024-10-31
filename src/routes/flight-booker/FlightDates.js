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

export default FlightDates;