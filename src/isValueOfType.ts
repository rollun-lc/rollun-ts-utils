/**
 * function tests is given string a valid JSON, or not
 * Examples:
 *      isJSON('') -> false
 *      isJSON(null) -> false
 *      isJSON('{}') -> true
 *      isJSON('{"1": invalid json') -> false
 */

export function isJSON(str: string) {
	if (!str) {
		return false;
	}
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

/**
 * strict check if string is valid float
 * Example:
 * 		isFloat('1.2') -> true
 * 		isFloat('1') -> true
 * 		isFloat('1,2') -> true
 * 		isFloat('1.2b') -> false
 * 		isFloat('1.2 ') -> false
 */

export function isFloat(val: string) {
	const floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
	if (!floatRegex.test(val)) {
		return false;
	}

	let n = parseFloat(val);
	return !isNaN(n);
}
