/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    let queue = [[sr, sc]];
    const prevValue = image[sr][sc];
    let x, y;
    let [m, n] = [image.length, image[0].length];

    image[sr][sc] = color;

    while (queue.length) {
        [x, y] = queue.shift();
        for (const [dx, dy] of [[0, -1], [0, 1], [-1, 0], [1, 0]]) {
            if (x + dx >= 0 && x + dx < m && y + dy >= 0 && y + dy < n) {
                if (image[x + dx][y + dy] != prevValue || image[x + dx][y + dy] == color) continue;

                image[x + dx][y + dy] = color;
                queue.push([x + dx, y + dy]);
            }
        }
    }

    return image;
};