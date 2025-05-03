/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    let n = nums.length;
    const memo = Array(n).fill().map(() => Array(n).fill(-1));

    const solve = (i, j) => {
        if (i > j) return 0;

        if (memo[i][j] == -1) {
            let maxCoins = 0;
            // try each balloon as the last balloon to burst so the boundaries are fixed
            for (let k = i; k <= j; k++) {
                // now calculate the coins considering kth one as last in that segment
                const coins = (nums[i - 1] || 1) * nums[k] * (nums[j + 1] || 1);
                const totalCoins = coins + solve(i, k - 1) + solve(k + 1, j);
                maxCoins = Math.max(maxCoins, totalCoins)
            }

            memo[i][j] = maxCoins;
        }

        return memo[i][j];
    }

    return solve(0, n - 1);
};