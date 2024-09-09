/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;

    nums.forEach(i => {
        if (i) count++;
        else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    });

    return Math.max(maxCount, count);
};