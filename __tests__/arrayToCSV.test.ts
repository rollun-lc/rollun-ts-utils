import { arrayToCSV } from '../src';

describe('Array to CSV', () => {
	test('Array of Objects', () => {
		const testData = [{a: 1, b: 2, c: 3}];
		const csv = arrayToCSV(testData);
		expect(csv).toEqual('"a","b","c"\n"1","2","3"');
	});
	test('Array of arrays', () => {
		const testData = [['a', 'b', 'c']];
		const csv = arrayToCSV(testData);
		expect(csv).toEqual('"0","1","2"\n"a","b","c"');
	});
	test('Empty array', () => {
		const testData = [];
		const csv = arrayToCSV(testData);
		expect(csv).toEqual('');
	})
})
