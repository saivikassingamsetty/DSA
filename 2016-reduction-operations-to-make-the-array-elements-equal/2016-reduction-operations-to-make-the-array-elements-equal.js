/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
    let res = 0;
    nums.sort((a, b) => b - a);

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i-1]) res += i;
    }

    return res;
};