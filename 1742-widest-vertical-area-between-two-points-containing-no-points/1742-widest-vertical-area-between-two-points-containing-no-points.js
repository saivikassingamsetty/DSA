/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    let unqX = points.map(i => i[0]).sort((a, b) => a - b);

    let max = 0;

    for (let i=1; i<unqX.length; i++) {
        max = Math.max(max, unqX[i]-unqX[i-1]);
    };

    return max;
};