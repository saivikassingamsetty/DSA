/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let [m, n] = [matrix.length, matrix[0].length];
    let l, r, mid;

    for (let i = 0; i < m; i++) {
        l = 0;
        r = n - 1;
        while (l <= r) {
            mid = Math.floor((l + r) / 2);
            if (matrix[i][mid] == target) return true
            else if (matrix[i][mid] > target) r = mid - 1
            else l = mid + 1
        }
    }

    return false
};