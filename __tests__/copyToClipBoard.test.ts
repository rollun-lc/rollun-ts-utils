import { copyToClipboard } from '../src';

describe('Copy to clipboard', () => {
	test('test with string', () => {
		Object.defineProperty(document, 'execCommand', { value: jest.fn() });
		const returnValue = copyToClipboard('string');
		expect(document.execCommand).toHaveBeenCalledWith("copy");
		expect(returnValue).toEqual("string");
	});

	test('test with json', () => {
		const returnValue = copyToClipboard({value: 'string'});
		expect(document.execCommand).toHaveBeenCalledWith("copy");
		expect(returnValue).toEqual(JSON.stringify({value: 'string'}));
	})

	test('test with number', () => {
		const returnValue = copyToClipboard(4);
		expect(document.execCommand).toHaveBeenCalledWith("copy");
		expect(returnValue).toEqual('4');
	})
});
