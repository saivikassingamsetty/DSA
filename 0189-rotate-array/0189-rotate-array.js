/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //reverse
    nums.reverse();
    let boundedK = k%nums.length;
    //reverse first k
    for (let i=0; i<Math.floor(boundedK/2); i++) {
        [nums[i], nums[boundedK-1-i]] = [nums[boundedK-1-i], nums[i]];
    }
    //reverse last n-k
    for (let i=0; i<Math.floor((nums.length-boundedK)/2); i++) {
        [nums[i+boundedK], nums[nums.length-1-i]] = [nums[nums.length-1-i], nums[i+boundedK]];
    }
};