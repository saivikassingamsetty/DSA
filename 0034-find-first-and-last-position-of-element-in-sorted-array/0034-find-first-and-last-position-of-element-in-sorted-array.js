/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let first = -1;

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (nums[mid] == target) {
            first = mid;
            high = mid - 1
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    low = 0;
    high = nums.length - 1;
    let last = -1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (nums[mid] == target) {
            last = mid;
            low = mid + 1
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return [first, last];
};