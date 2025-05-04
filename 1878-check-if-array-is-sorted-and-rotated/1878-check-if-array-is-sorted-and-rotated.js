/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let turningPointsFound = false;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if (turningPointsFound) return false;

            turningPointsFound = true;
        }
    }

    return !turningPointsFound || nums[nums.length - 1] <= nums[0];
};