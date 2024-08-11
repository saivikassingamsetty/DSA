/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let value = init;

    for (i in nums) {
        value = fn(value, nums[i]);
    }

    return value;
};