/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freqArray = {};

    for (let num of nums) {
        freqArray[num] = (freqArray[num] || 0) + 1;
    }

    return Object.keys(freqArray).sort((a, b) => freqArray[b] - freqArray[a]).slice(0, k).map(Number);
};