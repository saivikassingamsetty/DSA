/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let lastIndex = {};
    let res = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] in lastIndex && Math.abs(lastIndex[nums[j]] - j) <= k) return true;
        lastIndex[nums[j]] = j;
    }

    return false;
};