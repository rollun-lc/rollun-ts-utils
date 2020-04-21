export function camelCaseToWords (str: string) {
	return str
		.replace(/([a-z])([A-Z])/g, '$1 $2');
}

export function camelCaseToSnake(str: string) {
	return str
		.replace(/([a-z])([A-Z])/g, '$1_$2')
		.toLocaleLowerCase();
}

/**
 * pad string with symbol
 * @param n
 * @param width
 * @param symbol
 */

export function pad(n: string | number, width: number, symbol = '0') {
	const str = `${n}`;
	return str.length >= width
		? str
		: new Array(width - str.length + 1).join(symbol) + str;
}
