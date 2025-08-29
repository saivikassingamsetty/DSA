/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    let l = 0;
    let r = x;

    while (l < r) {
        let mid = Math.floor((l + r + 1) / 2);
        if (mid * mid == x) return mid
        else if (mid * mid > x) r = mid - 1
        else l = mid
    }

    return l;
};