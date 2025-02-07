/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let freqArray = {};
    let maxNum = 0;

    for (let num of nums) {
        freqArray[num] = (freqArray[num] || 0) + 1;
        maxNum = Math.max(maxNum, num);
    }

    let memo = new Map();

    const maxPoints = (i) => {
        if (i <= 0) return 0;

        if (!memo.has(i)) {
            //either exclude the current num or include it exclude the prev one like house robber
            memo.set(i, Math.max(maxPoints(i - 1), maxPoints(i - 2) + i * (freqArray[i] || 0)));
        }

        return memo.get(i);
    }

    return maxPoints(maxNum);
};