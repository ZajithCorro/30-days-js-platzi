import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
	const strings: Array<String> = [];

	return doTask1()
		.then((data) => {
			strings.push(data);
			return doTask2();
		})
		.then((data) => {
			strings.push(data);
			return doTask3();
		})
		.then((data) => {
			strings.push(data);
			return strings;
		});
}
