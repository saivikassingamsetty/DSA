/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    let freq = {};
    let res = 0;
    freq[k] = 0;

    for (let num of nums) {
        freq[num] = Math.max((freq[num] || 0), freq[k]) + 1;
        res = Math.max(res, freq[num] - freq[k]);
    }

    return freq[k] + res;
};