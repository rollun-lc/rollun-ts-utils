const DEFAULT_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

/**
 * @param length {number} - size of generated string
 * @param characters {string} - characters to use to generate string
 */

function randomString(length = 10, characters = DEFAULT_CHARACTERS): string {
	if (characters.length === 0) {
		throw new TypeError(`Argument characters must be a string with 1 and more characters!`);
	}
	let result = '';
	let charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export default randomString;
