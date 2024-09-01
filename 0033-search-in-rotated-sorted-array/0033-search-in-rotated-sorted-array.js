/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    function searchItem(l, r) {
        let mid;

        while (l <= r) {
            mid = l + Math.floor((r - l) / 2);
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return -1;
    }

    //find the pivot point, if target > pivot and target > end, search in first sorted
    //else search in second sorted

    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left < right - 1) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[left] > nums[mid]) {
            right = mid;
        } else {
            left = mid;
        }
    }

    //left holds the end of first sorted
    //right holds first of second sorted
    if (target <= nums[left] && target >= nums[0]) return searchItem(0, left);

    return searchItem(right, nums.length - 1);
};