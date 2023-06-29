import arrayToCSV, { CSVData } from './arrayToCSV';

/**
 * Download data as JSON
 */

export const downloadAsJSON = (data: any, filename = 'data.json') => {
	downloadDataWithContentType(JSON.stringify(data), 'application/json', filename);
};

/**
 * Download data as CSV
 */

export const downloadAsCSV = (data: CSVData, filename = 'data.csv') => {
	downloadDataWithContentType(arrayToCSV(data), 'text/csv', filename);
};

export const downloadAsText = (data: any, filename = 'data.txt') => {
	downloadDataWithContentType(typeof data === 'string' ? data : data.toString(), 'text/plain', filename);
};

/**
 * Downloads prided {data} with {type}, to {filename} file
 */

type ContentTypes = 'application/json' | 'text/csv' | 'text/plain' | 'application/pdf' | string;

export const downloadDataWithContentType = (data: string | BufferSource, type: ContentTypes, filename: string) => {
	const binaryData = new Blob([data], {type: type});
	const link = document.createElement('a');
	link.href = URL.createObjectURL(binaryData);
	link.download = filename;
	link.target = '_blank';
	link.click();
	URL.revokeObjectURL(link.href);
};
