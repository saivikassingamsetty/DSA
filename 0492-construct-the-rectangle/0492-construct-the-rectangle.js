/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let res = [area, 1];
    let min = area - 1;

    for (let i = Math.floor(Math.sqrt(area)); i >= 2; i--) {
        if (area % i == 0) {
            let div = Math.floor(area / i);
            if (min <= Math.abs(i - div)) break;
            res = [i, div];
            min = Math.abs(i - div);
        }
    }

    return res.sort((x, y) => y - x);
};