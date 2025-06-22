/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let prev = nums[mid - 1] ?? -Infinity;
        let next = nums[mid + 1] ?? -Infinity;

        // Best case, we found the peak
        if (nums[mid] > prev && nums[mid] > next) return mid

        // Else, somehow we need to split the search space
        if (nums[mid] > prev) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return 0;
};