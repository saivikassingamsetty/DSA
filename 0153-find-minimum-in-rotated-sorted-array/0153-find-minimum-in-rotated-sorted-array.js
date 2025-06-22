/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        // left of inflection point
        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            //right
            r = mid;
        }
    }

    return nums[l];
};