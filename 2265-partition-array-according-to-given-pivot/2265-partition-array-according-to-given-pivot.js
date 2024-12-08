/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    return [...nums.filter(i => i < pivot), ...nums.filter(i => i == pivot), ...nums.filter(i => i > pivot)];
};