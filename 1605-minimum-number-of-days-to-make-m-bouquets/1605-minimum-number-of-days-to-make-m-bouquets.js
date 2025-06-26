/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    let n = bloomDay.length;

    const canMake = (day) => {
        let count = 0;
        let res = 0;
        for (let d of bloomDay) {
            if (d <= day) count++
            else {
                count = 0;
            }

            if (count === k) {
                res++;
                count = 0;
            }
        }

        return res >= m;
    }

    let l = 1;
    let r = Math.max(...bloomDay);

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (canMake(mid)) r = mid
        else l = mid + 1
    }

    return canMake(l) ? l : -1;
};