/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    //find the index
    let i;
    for (i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            break;
        }
    }

    //find next greater element to the right
    let nextGreater = 1e9;
    let nextGreaterIndex;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > nums[i] && nextGreater >= nums[j]) {
            nextGreater = nums[j];
            nextGreaterIndex = j;
        }
    }

    //swap i and j
    [nums[i], nums[nextGreaterIndex]] = [nums[nextGreaterIndex], nums[i]];

    //sort right
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};