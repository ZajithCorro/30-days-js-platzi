export function createCalculator() {
	let state = 0;

	function add(x: number) {
		state += x;

		return state;
	}

	function subtract(x: number) {
		state -= x;

		return state;
	}

	function multiply(x: number) {
		state *= x;

		return state;
	}

	function divide(x: number) {
		state /= x;

		return state;
	}

	function clear() {
		state = 0;

		return state;
	}

	function getTotal() {
		return state;
	}

	return {
		add,
		subtract,
		multiply,
		divide,
		clear,
		getTotal,
	};
}
