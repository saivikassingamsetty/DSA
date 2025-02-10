/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let memo = new Map();

    const findWays = (i, t) => {
        if (i == -1) return t == 0 ? 1 : 0;

        let key = `${i},${t}`;

        if (!memo.has(key)) memo.set(key, findWays(i - 1, t - nums[i]) + findWays(i - 1, t + nums[i]));

        return memo.get(key);
    }

    return findWays(nums.length - 1, target);
};