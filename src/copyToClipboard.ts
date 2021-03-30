function copyToClipboard(str: string | Record<string, any> | number) {
	const el = document.createElement('textarea');
	let value: string;
	if (typeof str === 'object') {
		value = JSON.stringify(str);
	} else if (typeof str === 'number') {
		value = str.toString();
	} else {
		value = str;
	}
	el.value = value;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	return value;
}

export default copyToClipboard;
