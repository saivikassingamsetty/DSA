/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    // return async function(...args) {
    //     let val = await fn(...args);
    //     let timeOut = false;
    //     await Promise.resolve(setTimeout(() => {timeOut = true}, t));
    //     console.log(t, timeOut);

    //     if (timeOut) return "Time Limit Exceeded";

    //     return val;
    // }

    //using race
    return async function(...args) {
        let timeOutPromise = new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t);
        });
        let funcPromise = fn(...args)
        return await Promise.race([timeOutPromise, funcPromise]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */