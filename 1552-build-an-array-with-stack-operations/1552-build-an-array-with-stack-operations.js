/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let res = [];

    let i = 1;
    let j = 0;

    while (i <= n && j < target.length) {
        if (target[j] == i) {
            res.push("Push");
            i++;
            j++;
            continue;
        }
        while (target[j] > i && i <= n && j < target.length) {
            res.push("Push", "Pop");
            i++;
        }
    }

    return res;
};