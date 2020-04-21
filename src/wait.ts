/**
 * waiter. it waits...
 * Function return promise, that resolves in {duration} milliseconds.
 * Usage Example:
 * 		const foo = async () => {
 * 		 	try {
 * 		 		// will 'freeze' function	execution for 1000 milliseconds
 * 		 		await wait(1000);
 * 		 	    const data = await someAsyncDataFetch();
 * 		 	} catch (e) {
 * 		 	  // some error handling...
 * 		 	}
 * 		}
 */

const wait = (duration: number) =>
	new Promise(resolve => setTimeout(() => resolve(), duration));

export default wait;
