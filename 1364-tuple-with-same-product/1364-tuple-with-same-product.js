/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
    let dict = {};

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            dict[nums[i] * nums[j]] = (dict[nums[i] * nums[j]] || 0) + 1;
        }
    }

    let res = 0;
    for (let value of Object.values(dict)) {
        if (value > 1) {
            res += Math.floor((value * (value - 1)) / 2);
        }
    }

    return res * 8;
};