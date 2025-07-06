/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    let startingColor = image[sr][sc];
    if (startingColor == color) return image;

    let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

    const dfs = (i, j) => {
        if (i < 0 || i >= image.length || j < 0 || j >= image[0].length || image[i][j] != startingColor) return;

        image[i][j] = color;
        for (let [di, dj] of dirs) {
            dfs(i + di, j + dj);
        }
    }

    dfs(sr, sc);

    return image;
};