/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSum = function (nums) {
    let res = 1e9;
    let n = nums.length;

    for (let j = 1; j < n-1; j++) {
        let left = Math.min(...nums.slice(0, j));
        let right = Math.min(...nums.slice(j+1, n));

        if (nums[j] > left && nums[j] > right) {
            res = Math.min(res, nums[j] + left + right);
        }
    }

    return res == 1e9 ? -1 : res;
};