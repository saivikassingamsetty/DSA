/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let buy = prices[0];
    let i;

    for (i = 1; i < prices.length; i++) {
        //when downfall starts
        if (prices[i] < prices[i-1]) {
            profit += Math.max(0, prices[i-1] - buy);
            buy = prices[i];
        }
    }

    profit += Math.max(0, prices[i-1] - buy);

    return profit;
};