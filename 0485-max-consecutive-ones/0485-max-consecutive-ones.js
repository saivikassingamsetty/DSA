/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0;
    let maxCount = 0;

    for (let num of nums) {
        if (!num) {
            maxCount = Math.max(maxCount, count);
            count = 0;
            continue;
        }

        count++;
    }

    return Math.max(maxCount, count);
};