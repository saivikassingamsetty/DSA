/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let res = {};

    for (const [index, size] of Object.entries(groupSizes)) {
        if (res[size]) {
            if (res[size].slice(-1)[0].length % size == 0) {
                res[size].push([index]);
            } else {
                let lastItem = res[size].slice(-1)[0];
                res[size].splice(-1, 1, [...lastItem, index]);
            }
        } else {
            res[size] = [[index]];
        }
    }

    let finalRes = [];
    for (let value of Object.values(res)) {
        finalRes.push(...value);
    }

    return finalRes;
};