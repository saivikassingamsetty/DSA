/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majority = 0;
    let probableWinner = nums[0];

    for (let c of nums) {
        if (majority == 0) probableWinner = c;
        majority += (c == probableWinner) ? 1: -1;
    }

    return probableWinner;
};