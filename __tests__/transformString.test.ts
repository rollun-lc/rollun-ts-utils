import { camelCaseToSnake, camelCaseToWords, pad } from '../src/transformString';

describe('Transform string', () => {
	test('string in camel case to words', () => {
		const src = 'camelCaseString';
		expect(camelCaseToWords(src)).toEqual('camel Case String');
	});
	test('string in camel case to snake case', () => {
		const src = 'camelCaseString';
		expect(camelCaseToSnake(src)).toEqual('camel_case_string');
	});
	test('pad number with 0', () => {
		expect(pad(10, 3)).toEqual('010');
	});
	test('pad string with 0', () => {
		expect(pad('10', 3)).toEqual('010');
	});
	test('pad empty string with 0', () => {
		expect(pad('', 3)).toEqual('000');
	});
	test('pad empty string with custom symbol', () => {
		expect(pad('42', 5, '+')).toEqual('+++42');
	});
});
