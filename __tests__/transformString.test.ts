import { camelCaseToSnake, camelCaseToWords } from '../src/transformString';

describe('Transform string', () => {
	test('string in camel case to words', () => {
		const src = 'camelCaseString';
		expect(camelCaseToWords(src)).toEqual('camel Case String');
	});
	test('string in camel case to snake case', () => {
		const src = 'camelCaseString';
		expect(camelCaseToSnake(src)).toEqual('camel_case_string');
	});
});
