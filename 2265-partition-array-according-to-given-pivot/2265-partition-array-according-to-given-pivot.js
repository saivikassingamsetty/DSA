/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    // return [...nums.filter(i => i < pivot), ...nums.filter(i => i == pivot), ...nums.filter(i => i > pivot)];

    const res = [];
    let left = 0;
    let right = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) res[left++] = nums[i];
        if (nums[nums.length - i - 1] > pivot) res[right--] = nums[nums.length - i - 1];
    }

    while (left <= right) {
        res[left++] = pivot;
        res[right--] = pivot;
    }

    return res;
};