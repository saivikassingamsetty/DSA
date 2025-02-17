/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
    let res = new Set();

    const countPossibilities = (str, visited) => {
        if (str.length) res.add(str);
        if (str.length == tiles.length) return;

        for (let i = 0; i < tiles.length; i++) {
            if (!visited.has(i)) {
                visited.add(i);
                countPossibilities(str + tiles[i], visited);
                visited.delete(i);
            }
        }
    }

    countPossibilities('', new Set());
    return res.size;
};