/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function (n, quantities) {
    const canDistribute = (x) => {
        return quantities.reduce((acc, i) => acc + Math.ceil(i / x), 0) <= n;
    }

    let l = 0;
    let r = Math.max(...quantities);

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (canDistribute(mid)) r = mid;
        else l = mid + 1;
    }

    return l;
};