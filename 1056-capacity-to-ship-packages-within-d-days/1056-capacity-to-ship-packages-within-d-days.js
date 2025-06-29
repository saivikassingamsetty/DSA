/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    const canShip = (capacity) => {
        let totalWeight = 0;
        let daysCount = 0;

        for (let wt of weights) {
            if (totalWeight + wt > capacity) {
                totalWeight = wt;
                daysCount++;
            } else {
                totalWeight += wt;
            }

            if (daysCount > days) return false
        }

        if (totalWeight) daysCount++;

        return daysCount <= days;
    }

    let l = Math.max(...weights);
    let r = weights.reduce((acc, i) => acc + i, 0);

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (canShip(mid)) r = mid
        else l = mid + 1
    }

    return l;
};