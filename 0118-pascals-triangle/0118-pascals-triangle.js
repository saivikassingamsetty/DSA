/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [[1]];
    let a, b, temp;

    while (numRows > 1) {
        a = [0, ...res[res.length - 1]];
        b = [...res[res.length - 1], 0];
        res.push(a.map((item, index) => item + b[index]));
        numRows--;
    }

    return res;
};