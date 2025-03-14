/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    const canEatAll = (speed) => {
        return piles.reduce((acc, i) => {
            acc += Math.ceil(i / speed);

            return acc;
        }, 0) <= h;
    }

    let l = 1;
    let r = Math.max(...piles);
    let res = 0;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (canEatAll(mid)) {
            res = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return res;
};