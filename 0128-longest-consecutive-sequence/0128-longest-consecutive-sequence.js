/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let numSet = new Set(nums);
    maxCount = 0;

    for (let num of numSet) {
        //start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currCount = 1;

            while (numSet.has(currentNum + 1)) {
                currCount++;
                currentNum++;
            }

            maxCount = Math.max(maxCount, currCount)
        }
    }

    return maxCount;
};