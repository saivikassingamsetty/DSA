/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftPrefixProduct = new Array(nums.length).fill(1);
    let rightPrefixProduct = new Array(nums.length).fill(1);

    for (let i = 0; i < nums.length; i++) {
        leftPrefixProduct[i] = (leftPrefixProduct[i - 1] ?? 1) * nums[i];
        rightPrefixProduct[nums.length - 1 - i] = (rightPrefixProduct[nums.length - i] ?? 1) * nums[nums.length - 1 - i];
    }

    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push((leftPrefixProduct[i - 1] ?? 1) * (rightPrefixProduct[i + 1] ?? 1));
    }

    return res;
};