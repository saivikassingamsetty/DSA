/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
    let freq = new Map();

    for (let i of nums) freq.set(i, (freq.get(i) || 0) + 1);

    if (Object.keys(freq).length == 1) return 0;

    let res = 0;
    let currCount;

    let keys = Array.from(freq.keys());
    keys.sort((a, b) => b - a);

    for (let i = 0; i < keys.length - 1; i++) {
        currCount = freq.get(keys[i]);
        res += currCount;
        freq.set(keys[i + 1], freq.get(keys[i + 1]) + currCount);
    }

    return res;
};