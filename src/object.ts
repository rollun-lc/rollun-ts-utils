/**
 * Finds property by path in object/array
 * Examples -
 * 	resolvePath({a: {b: {c: 1}}}, 'a.b.c') => 1
 * 	resolvePath({a: {b: {c: 1}}}, 'a.b.d') => null
 * 	resolvePath({a: {b: ['one', 'two']}}, 'a.b[1]') => 'two'
 * @param o  any object
 * @param s - path like 'a.b.c[0].b'
 * @return {*}
 */

export function resolvePath(o: Object | Array<any>, s): any | null {
	s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
	s = s.replace(/^\./, '');           // strip a leading dot
	let a = s.split('.');
	for (let i = 0, n = a.length; i < n; ++i) {
		let k = a[i];
		if (typeof o === 'object' && k in o) {
			o = o[k];
		} else {
			return null;
		}
	}
	return o;
}
