/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.join('') == [...nums].sort((a, b) => b - a).join('')) return nums.sort((a, b) => a - b);

    //find the index
    let i;
    for (i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            break;
        }
    }

    if (i == undefined) return;

    //find next greater element to the right
    let nextGreater = 1e9;
    let nextGreaterIndex;
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] > nums[i] && nextGreater >= nums[j]) {
            nextGreater = nums[j];
            nextGreaterIndex = j;
        }
    }

    console.log(i, nextGreaterIndex);

    //swap i and j
    [nums[i], nums[nextGreaterIndex]] = [nums[nextGreaterIndex], nums[i]];

    //sort right
    // for (let k = 0; k < Math.floor((nums.length - i - 1) / 2); k++) {
    //     [nums[i + 1 + k], nums[nums.length - 1 - k]] = [nums[nums.length - 1 - k], nums[i + 1 + k]];
    // }

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};