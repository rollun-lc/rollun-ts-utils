import difference from '../src/diff';

describe('Diff between objects', () => {
	test('simple diff', () => {
		const a = {a: 1, b: 2, c: 1};
		const b = {c: 1, d: 2};
		expect(difference(a, b)).toEqual({a: 1, b: 2});
	});
	test('Empty objects', () => {
		expect(difference({}, {})).toEqual({});
	});
});
