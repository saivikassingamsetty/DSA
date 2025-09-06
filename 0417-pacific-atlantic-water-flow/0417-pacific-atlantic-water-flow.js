/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    pacificPoints = new Set();
    atlanticPoints = new Set();
    let [m, n] = [heights.length, heights[0].length];
    let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];

    const findPeaks = (i, j, isAtlantic) => {
        if (i < 0 || i > m || j < 0 || j > n) return;

        (isAtlantic ? atlanticPoints : pacificPoints).add(`${i},${j}`);

        for (let [dx, dy] of dirs) {
            di = i + dx;
            dj = j + dy;

            if (di >= 0 && di < m && dj >= 0 && dj < n && heights[di][dj] >= heights[i][j]) {
                if (!(isAtlantic ? atlanticPoints : pacificPoints).has(`${di},${dj}`)) {
                    (isAtlantic ? atlanticPoints : pacificPoints).add(`${di},${dj}`);
                    findPeaks(di, dj, isAtlantic);
                }
            }
        }
    }

    // pacific 
    for (let i = 0; i < m; i++) findPeaks(i, 0, 0);
    for (let j = 0; j < n; j++) findPeaks(0, j, 0);

    //atlantic
    for (let i = 0; i < m; i++) findPeaks(i, n - 1, 1);
    for (let j = 0; j < n; j++) findPeaks(m - 1, j, 1);

    return [...pacificPoints.intersection(atlanticPoints)].map(x => x.split(',').map(parseFloat));
};