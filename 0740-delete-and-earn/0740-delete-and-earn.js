/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    let freqArray = {};
    let maxNum = 0;

    for (let num of nums) {
        freqArray[num] = (freqArray[num] ?? 0) + 1;
        maxNum = Math.max(maxNum, num);
    }

    let prev = 0;
    let curr = freqArray[1] || 0;
    for (let i = 2; i <= maxNum; i++) {
        [prev, curr] = [curr, Math.max(curr, prev + i * (freqArray[i] ?? 0))];
    }

    return curr;
};