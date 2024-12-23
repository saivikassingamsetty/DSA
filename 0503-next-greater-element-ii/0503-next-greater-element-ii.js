/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    nums.push(...nums);

    let stack = [];
    let res = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length && nums[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        if (i < Math.floor(nums.length/2))
            res[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(nums[i]);
    }

    return res;
};