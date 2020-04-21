import { last } from '../src/array';

describe('Array utils', () => {
	test('last element', () => {
		expect(last([1, 2, 3])).toEqual(3);
	});
	test('last element of empty array', () => {
		expect(last([])).toBeUndefined();
	});
});
