/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    // 2D DP
    const n = coins.length;
    const dp = Array.from({ length: n + 1 }, () => new Array(amount + 1).fill(0));

    //reccurance relation (number of ways of making x amount with i coins)
    // dp[i][x] = dp[i-1][x] + dp[i][x - coin(i)];

    //base case
    dp[0][0] = 1;

    for (let coinIndex = 1; coinIndex <= n; coinIndex++) {
        for (let balance = 0; balance <= amount; balance++) {
            dp[coinIndex][balance] = dp[coinIndex - 1][balance];
            if (balance >= coins[coinIndex - 1]) dp[coinIndex][balance] += dp[coinIndex][balance - coins[coinIndex - 1]];
        }
    }

    return dp[n][amount];
};