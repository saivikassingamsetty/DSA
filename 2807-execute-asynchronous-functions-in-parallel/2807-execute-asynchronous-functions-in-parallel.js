/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let res = [];
        let completed = 0;

        functions.forEach((fn, index) => {
            fn()
            .then(result => {
                res[index] = result;
                completed++;
                if (completed === functions.length) resolve(res);
            })
            .catch(result => reject(result));
        });
    })
};


/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */