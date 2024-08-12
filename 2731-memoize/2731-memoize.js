/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let callCount = 0;
    let cache = new Map();

    return function(...args) {
        if (cache.has(args.toString())) return cache.get(args.toString());

        let value = fn(...args);
        cache.set(args.toString(), value);
        callCount++;
        
        return value;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */