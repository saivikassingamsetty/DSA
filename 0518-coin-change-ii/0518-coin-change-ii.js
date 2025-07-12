/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
    const memo = new Map();

    const dfs = (i, change) => {
        if (i >= coins.length) return 0;
        if (change < 0) return 0;
        if (change == 0) return 1;

        let key = i + ',' + change;

        if (!memo.has(key)) {
            memo.set(key, dfs(i, change - coins[i]) + dfs(i + 1, change));
        }

        return memo.get(key);
    }

    return dfs(0, amount);
};