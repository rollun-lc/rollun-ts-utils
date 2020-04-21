import { isFloat, isJSON } from '../src/isValueOfType';

describe('Is Value of type', () => {
	test('valid json', () => {
		expect(isJSON('{"valid": "json"}')).toEqual(true);
	});
	test('invalid json', () => {
		expect(isJSON('{"invalid json')).toEqual(false);
	});
	test('valid float', () => {
		expect(isFloat('42.21')).toEqual(true);
	});
	test('negative float', () => {
		expect(isFloat('-42.21')).toEqual(true);
	});
	test('invalid float', () => {
		expect(isFloat('42.21 ')).toEqual(false);
	});
	test('invalid float #2', () => {
		expect(isFloat('42.21fglerbh')).toEqual(false);
	});
});
