export function myMap(array: Array<any>, func: Function) {
	let newArray: Array<any> = [];

	for (let index = 0; index < array.length; index++) {
		newArray.push(func(array[index]));
	}

	return newArray;
}
