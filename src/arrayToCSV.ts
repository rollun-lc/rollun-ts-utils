function castValueToCSVValue(value: string | number | any) {
	if (typeof value === 'string') {
		return value.replace(/"/g, '""');
	} else if (typeof value === 'number') {
		return value.toString();
	} else {
		return JSON.stringify(value).replace(/"/g, '""');
	}
}

/**
 * Data to CSV
 * Example:
 * const data = [{id: '1', field: '2'}, {id: '3', field: '4'}]
 * dataToCSV(data) -> 'id,field\n"1","2"\n"3","4"\n'
 */

export type CSVValue = string | number | any;
export type CSVRow = {[key: string]: CSVValue} | Array<CSVValue>;
export type CSVData = Array<CSVRow>;

function arrayToCSV(flatData: CSVData) {
	if (flatData.length === 0) {
		return '';
	}
	const header = `"${Object.keys(flatData[0]).join('","')}"`;
	const data = flatData
		.map(row => Object.values(row).map(val => `"${castValueToCSVValue(val)}"`).join(','))
		.join('\n');
	return `${header}\n${data}`;
}

export default arrayToCSV;
