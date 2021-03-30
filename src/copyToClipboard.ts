function copyToClipboard(str: string | JSON) {
	const el = document.createElement('textarea');
	let value = typeof str === 'object' ? JSON.stringify(str) : str;
	el.value = value;
	document.body.appendChild(el);
	el.select();
	document.execCommand('copy');
	document.body.removeChild(el);
	return value;
}

export default copyToClipboard;
