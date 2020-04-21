/**
 * sets timeout for promise
 * @param promise
 * @param ms
 */

const withTimeout = <T>(promise: Promise<T>, ms: number) => {
	return new Promise<T>((resolve, reject) => {
		const id = setTimeout(() => reject(new Error(`timeout after ${ms}ms`)), ms);
		promise
			.then(res => resolve(res))
			.catch(err => reject(err))
			.finally(() => clearTimeout(id));
	});
};

export default withTimeout;
