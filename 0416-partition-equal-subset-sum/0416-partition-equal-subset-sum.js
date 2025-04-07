/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    let sum = nums.reduce((a, i) => a + i, 0);
    if (sum % 2) return false

    let memo = new Map();

    sum = Math.floor(sum / 2);

    const dfs = (i, sumSoFar) => {
        if (i == nums.length) return sumSoFar === sum;

        let key = `${i}_${sumSoFar}`;
        if (!memo.has(key)) {
            memo.set(key, dfs(i + 1, sumSoFar) || dfs(i + 1, sumSoFar + nums[i]));
        }

        return memo.get(key);
    }

    return dfs(0, 0);
};