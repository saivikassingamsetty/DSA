/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
    let [left, right, top, down] = [Infinity, -Infinity, Infinity, -Infinity]

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]) {
                left = Math.min(j, left);
                right = Math.max(j, right);
                top = Math.min(i, top);
                down = Math.max(i, down);
            }
        }
    }

    if (left == Infinity) return 0;

    return (right - left + 1) * (down - top + 1);
};