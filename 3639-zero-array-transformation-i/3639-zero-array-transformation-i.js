/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function (nums, queries) {
    let line = new Array(nums.length + 1).fill(0);

    for (let [i, j] of queries) {
        line[i]--;
        line[j + 1]++;
    }

    let runningSum = 0;
    for (let i = 0; i < nums.length; i++) {
        runningSum += line[i];
        if (nums[i] + runningSum > 0) return false;
    }

    return true;
};