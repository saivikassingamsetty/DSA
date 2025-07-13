/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    // Kadane
    let findMaxSubarray = (i) => {
        let runningCount = 0;
        let maxCount = 0;
        for (let num of nums) {
            if (num == i) runningCount++
            else if (num == k) runningCount--
            if (runningCount < 0) runningCount = 0
            maxCount = Math.max(maxCount, runningCount);
        }

        return Math.max(maxCount, runningCount);
    }

    let res = 0;
    let orgK = 0;
    for (let num of nums) if (num == k) orgK++;


    for (let i = 1; i <= 50; i++) {
        if (i == k) continue;
        res = Math.max(res, findMaxSubarray(i))
    }

    return res + orgK;
};