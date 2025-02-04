/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function (security, time) {
    let n = security.length;
    let decreasingCountBefore = new Array(n).fill(1);
    let increasingCountAfter = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        if (security[i] <= security[i - 1]) {
            decreasingCountBefore[i] += decreasingCountBefore[i - 1];
        }
    }

    for (let i = n - 2; i >= 0; i--) {
        if (security[i] <= security[i + 1]) {
            increasingCountAfter[i] += increasingCountAfter[i + 1];
        }
    }

    let res = [];
    for (let i = 0; i < n; i++) {
        if (decreasingCountBefore[i] > time && increasingCountAfter[i] > time) res.push(i);
    }

    return res;
};