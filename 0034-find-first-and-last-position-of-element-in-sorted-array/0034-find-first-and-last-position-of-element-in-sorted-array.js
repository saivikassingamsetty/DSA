/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let [l1, l2, r1, r2] = [0, 0, nums.length - 1, nums.length - 1];
    let mid;

    while (l1 < r1) {
        mid = Math.floor((l1 + r1) / 2);
        if (nums[mid] < target) l1 = mid + 1
        else r1 = mid
    }

    while (l2 < r2) {
        mid = Math.floor((l2 + r2 + 1) / 2);
        if (nums[mid] > target) r2 = mid - 1
        else l2 = mid
    }

    return [(nums[l1] === target ? l1 : -1), (nums[l2] === target ? l2 : -1)]
};