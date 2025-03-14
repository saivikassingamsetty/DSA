/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
    const canBeAchieved = (candyCount) => {
        let totalValidPiles = 0;

        for (let candy of candies) {
            totalValidPiles += Math.floor(candy / candyCount);
            if (totalValidPiles >= k) return true;
        }

        return false;
    }

    let maxCandies = Math.max(...candies);

    let l = 0;
    let r = maxCandies;
    let res = 0;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (canBeAchieved(mid)) {
            res = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return res;
};