/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let res;
    let i = 0;
    let temp = arr;

    while(i<n) {
        res = [];
        for(let item of temp) {
            if (Number.isInteger(item)) {
                res.push(item)
            } else {
                res.push(...item)
            }
        };
        temp = res;
        i++;
    }

    return temp;
};