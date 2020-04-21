import _ from 'lodash';

/**
 * Deep diff between two object, using lodash
 * Returns object with properties from {object}, that does not exist in {base} or exits  but not equal
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */

function difference(object: {}, base: {}) {
	const changes = (object: {}, base: {[key: string]: any}) => {
		return _.transform(object, (result: {[key: string]: any}, value, key) => {
			if (!_.isEqual(value, base[key])) {
				result[key] = (_.isObject(value) && _.isObject(base[key])) ? changes(value, base[key]) : value;
			}
		});
	};
	return changes(object, base);
}

export default difference;
