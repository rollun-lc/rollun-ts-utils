import to24htime from '../src/to24htime';

describe('12h to 24h', () => {
	test('valid', () => {
		expect(to24htime('1:00 AM')).toEqual('01:00');
	});
	test('valid #2', () => {
		expect(to24htime('12:00AM')).toEqual('00:00');
	});
	test('valie #3', () => {
		expect(to24htime('11:00pm')).toEqual('23:00');
	});
	test('invalid format', () => {
		expect(() => to24htime('invalid time')).toThrow();
	})
	test('empty', () => {
		expect(() => to24htime('')).toThrow();
	})
});
