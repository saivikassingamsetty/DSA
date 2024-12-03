/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
    const pointSet = new Set();

    points.forEach(([x,y]) => pointSet.add(`${x} ${y}`));

    let minArea = 1e9;

    if (points.size < 4) return 0;

    for (let [x1, y1] of points) {
        for (let [x2, y2] of points) {
            if (x1 > x2 && y1 > y2) {
                if (pointSet.has(`${x1} ${y2}`) && pointSet.has(`${x2} ${y1}`)) {
                    minArea = Math.min(minArea, Math.abs(x1 - x2) * Math.abs(y1 - y2))
                }
            }
        }
    }

    return (minArea === 1e9 ? 0: minArea);
};