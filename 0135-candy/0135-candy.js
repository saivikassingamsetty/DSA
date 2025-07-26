/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let n = ratings.length;
    let candies = new Array(n).fill(1);

    // slope ups from left
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = Math.max(candies[i], candies[i - 1] + 1);
        }
    }

    // slope downs from right (compared with slopeups from left to find peak candies)
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    return candies.reduce((sum, i) => sum + i, 0);
};