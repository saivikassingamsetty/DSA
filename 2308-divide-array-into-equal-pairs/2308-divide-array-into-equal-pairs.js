/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let freq = new Map();
    nums.forEach(item => (freq.set(item, (freq.get(item) || 0) + 1)));

    for (let [key, value] of freq) if (value%2) return false;

    return true;
};