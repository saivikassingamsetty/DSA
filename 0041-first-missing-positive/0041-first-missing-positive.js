/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    //use cycle sort
    let i = 0;
    while (i < nums.length) {
        let correctIndex = nums[i] - 1;
        if (correctIndex >= 0 && correctIndex < nums.length && nums[i] != nums[correctIndex]) {
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
        else {
            i++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i + 1) return i + 1;
    }

    return nums.length + 1;
};