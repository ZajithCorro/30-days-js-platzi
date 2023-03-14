export function doTask1(): Promise<String> {
	return new Promise((resolve, _) => {
		setTimeout(() => resolve('Task 1'), 300);
	});
}

export function doTask2(): Promise<String> {
	return new Promise((resolve, _) => {
		setTimeout(() => resolve('Task 2'), 300);
	});
}

export function doTask3(): Promise<String> {
	return new Promise((resolve, _) => {
		setTimeout(() => resolve('Task 3'), 300);
	});
}
