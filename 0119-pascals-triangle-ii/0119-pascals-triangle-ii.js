/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let res = [1];
    for (let i = 2; i <= rowIndex + 1; i++) {
        temp = new Array(i).fill(1);
        for (let j = 1; j < i - 1; j++) {
            temp[j] = res[j - 1] + res[j];
        }
        res = [...temp];
    }

    return res;
};