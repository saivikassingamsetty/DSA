/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    //min number of coins needed to get i amount
    let dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }

    return dp[amount] == Infinity ? -1 : dp[amount];
};