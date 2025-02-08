var waysToReachStair = function (k) {
    let memo = new Map();

    const findWays = (pos, jump, canGoDown) => {
        const key = `${pos},${jump},${canGoDown}`;
        if (memo.has(key)) return memo.get(key);

        let ways = 0;

        if (pos == k) ways++;

        if (pos > 0 && canGoDown) ways += findWays(pos - 1, jump, 0);
        if (pos + 2 ** jump <= k + 1) ways += findWays(pos + 2 ** jump, jump + 1, 1);

        memo.set(key, ways);
        return ways;
    }

    return findWays(1, 0, 1);
};
