/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let [l, r] = [0, nums.length - 1];
    let mid;

    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (nums[mid] == target) return true

        //edge case
        if (nums[l] == nums[mid] && nums[mid] == nums[r]) {
            l++;
            r--;
            continue;
        }

        if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target <= nums[mid]) r = mid - 1
            else l = mid + 1
        } else {
            if (nums[mid] <= target && target <= nums[r]) l = mid + 1
            else r = mid - 1
        }
    }

    return false;
};