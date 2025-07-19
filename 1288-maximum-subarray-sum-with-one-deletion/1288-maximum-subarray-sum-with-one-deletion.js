/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumSum = function (arr) {
    let res = arr[0];
    let oneDel = arr[0];
    let noDel = arr[0];

    for (let i = 1; i < arr.length; i++) {
        oneDel = Math.max(noDel, oneDel + arr[i]);
        noDel = Math.max(noDel + arr[i], arr[i]);
        res = Math.max(res, oneDel, noDel);
    }

    return res;
};