/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
    let maxLeft = nums[0];
    let pre = new Array(nums.length).fill(0);

    // Pre computing (nums[i] - nums[j])
    for (let i = 1; i < nums.length - 1; i++) {
        if (maxLeft >= nums[i]) pre[i] = maxLeft - nums[i];
        maxLeft = Math.max(maxLeft, nums[i]);
    }

    //Post computing max nums[k]
    let max = 0;
    let maxRight = nums[nums.length - 1];
    for (let i = nums.length - 2; i > 0; i--) {
        max = Math.max(max, pre[i] * maxRight);
        maxRight = Math.max(maxRight, nums[i]);
    }

    return max;
};