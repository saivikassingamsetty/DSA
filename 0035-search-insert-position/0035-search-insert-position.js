/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) return mid
        else if (nums[mid] < target) l = mid + 1
        else r = mid
    }

    return nums[l] < target ? l + 1 : l;
};