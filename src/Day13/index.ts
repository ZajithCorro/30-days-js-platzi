import { doTask1, doTask2, doTask3 } from './tasks';

export async function runCode() {
	const strings: Array<String> = [];

	strings.push(await doTask1());
	strings.push(await doTask2());
	strings.push(await doTask3());

	return strings;
}
