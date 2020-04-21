import isJSON from '../src/isJSON';

describe('Is JSON', () => {
	test('valid json', () => {
		expect(isJSON('{"valid": "json"}')).toEqual(true);
	});
	test('invalid json', () => {
		expect(isJSON('{"invalid json')).toEqual(false);
	});
});
