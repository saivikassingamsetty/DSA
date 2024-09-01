/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let map = new Map();

    for (let i of nums) map.set(i, (map.get(i) || 0) + 1);

    // return Object.values(map).reduce((acc, i) => acc + Math.floor(i*(i-1)/2), 0);

    let res = 0;
    for (let [i, j] of map) {
        res += (j*(j-1))/2;
    }

    return res;
};