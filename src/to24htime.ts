/**
 * Turns 12h format time to 24h time
 * @reference https://www.timecalculator.net/12-hour-to-24-hour-converter
 */

const to24htime = (time: string) => {
	if (!time) { throw new TypeError('Argument time is required'); }
	const ten = (i: number) => (i < 10 ? '0' : '') + i;
	const trimmed = time.trim();
	if (!/^([0-9]{1,2}):([0-9]{1,2})\s?(pm|am)$/i.test(trimmed)) {
		throw new TypeError(`time must be in following format: 12:01PM`);
	}
	return trimmed.replace(/([0-9]{1,2}):([0-9]{1,2})\s?(pm|am)/i, (...match) => {
		const [, hours, minutes, partOfDay] = match;
		let HH = +hours;
		let MM = +minutes;
		if (/am/i.test(partOfDay) && HH === 12 ) {
			HH -= 12;
		}
		if (/pm/i.test(partOfDay) && HH >= 1 && HH < 12) {
			HH += 12;
		}
		return `${ten(HH)}:${ten(MM)}`;
	});
};

export default to24htime;
