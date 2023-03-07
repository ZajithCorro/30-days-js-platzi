export function printTriangle(size: number, character: string) {
	let triangle: Array<string> = [];

	for (let i = 1; i <= size; i++) {
		const row = character.repeat(i).padStart(size, ' ');
		triangle.push(row);
	}

	return triangle.join('\n');
}
