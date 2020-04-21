import { randomString } from '../src';

describe('Random string', () => {
	test('generated string length', () => {
		const length = 15;
		const generatedRandomString = randomString(length);
		expect(generatedRandomString.length).toEqual(length);
	})
	test('generated string characters', () => {
		const alphabet = '1';
		const generatedRandomString = randomString(5, alphabet);
		expect(generatedRandomString).toEqual('11111');
	});
});
