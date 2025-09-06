/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
    let dp = new Array(target+1).fill(0);
    dp[0] = 1;

    for (let balance = 1; balance <= target; balance++) {
        let count = 0;
        for (let num of nums) {
            if (balance >= num) count += dp[balance-num];
        }
        dp[balance] = count;
    }

    return dp[target];
};