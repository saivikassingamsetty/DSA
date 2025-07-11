/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
    let n = startTime.length;

    const jobs = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        jobs[i] = [startTime[i], endTime[i], profit[i]];
    }

    jobs.sort((a, b) => a[0] - b[0]);

    const findCeil = (end) => {
        let l = 0;
        let r = n;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (jobs[mid][0] >= end) r = mid;
            else l = mid + 1;
        }

        return l;
    }

    const memo = new Map();

    const findProfit = (i) => {
        if (i >= n) return 0;

        if (memo.has(i)) return memo.get(i);

        let nextStart = findCeil(jobs[i][1]);
        let include = jobs[i][2] + findProfit(nextStart);
        let exclude = findProfit(i + 1);

        memo.set(i, Math.max(include, exclude));
        return memo.get(i);
    }

    return findProfit(0);
};