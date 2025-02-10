/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
    //cost to travel till i days
    let dp = new Array(days[days.length - 1] + 1).fill(0);

    let dayIndex = 0;
    for (let i = 1; i <= days[days.length - 1]; i++) {
        //if not a travel day
        if (i != days[dayIndex]) {
            dp[i] = dp[i - 1];
            continue;
        }

        else {
            let oneDay = costs[0] + dp[Math.max(0, i - 1)];
            let oneWeek = costs[1] + dp[Math.max(0, i - 7)];
            let oneMonth = costs[2] + dp[Math.max(0, i - 30)];
            dp[i] = Math.min(oneDay, oneWeek, oneMonth);
        }

        dayIndex++;
    }

    return dp[days[days.length - 1]];
};