export function calculateTip(billAmount: number, tipPercentage: number) {
	return billAmount * (tipPercentage / 100);
}
