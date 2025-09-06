/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    let left = -1;
    let res = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right]) {
            let length = right - left - 1;
            res += (length * (length + 1)) / 2;
            left = right;
        }
    }

    let length = nums.length - left - 1;
    res += (length * (length + 1)) / 2;

    return res;
};