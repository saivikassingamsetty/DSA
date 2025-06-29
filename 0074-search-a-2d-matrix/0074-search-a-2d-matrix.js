/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let l = 0;
    let r = matrix.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r + 1) / 2);
        if (matrix[mid][0] == target) return true;
        else if (matrix[mid][0] < target) l = mid
        else r = mid - 1
    }

    let a = 0;
    let b = matrix[l].length;

    while (a <= b) {
        let mid = Math.floor((a + b) / 2);
        if (matrix[l][mid] == target) return true;
        else if (matrix[l][mid] < target) a = mid + 1
        else b = mid - 1
    }

    return false
};