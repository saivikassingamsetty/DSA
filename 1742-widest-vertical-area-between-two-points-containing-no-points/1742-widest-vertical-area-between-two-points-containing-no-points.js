/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
    let unqX = [...new Set(points.map(i => i[0]))].sort((a, b) => a - b);

    // return unqX.reduce((acc, item) => {
    //     if (acc[1] == -1) return [0, item];

    //     acc = [Math.max(acc[0], item - acc[1]), item];

    //     return acc;
    // }, [0, -1]);

    let max = 0;

    for (let i=1; i<unqX.length; i++) {
        max = Math.max(max, unqX[i]-unqX[i-1]);
    };

    return max;
};