/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
        let val = fn(item)
        // acc[val] = (acc[val] ?? []).concat([item]); gives tle
        if (!acc[val]) acc[val] = []
        acc[val].push(item)

        return acc;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */