/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let numsCopy = [...nums];

    for (let i=0; i<nums.length; i++) {
        let mK = k%nums.length;
        nums[i] = i >= mK ? numsCopy[i-mK]: numsCopy[nums.length+(i-mK)];
    }
};