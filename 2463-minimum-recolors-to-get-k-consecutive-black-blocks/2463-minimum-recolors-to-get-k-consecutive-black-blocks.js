/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let localMin = 0;
    for (let i = 0; i < k; i++) if (blocks[i] == 'W') localMin++;
    let finalMin = localMin;
    if (finalMin == 0) return 0;

    for (let i = k; i < blocks.length; i++) {
        if (blocks[i] == 'W') localMin++;
        if (blocks[i - k] == 'W') localMin--;

        finalMin = Math.min(finalMin, localMin);
        if (finalMin == 0) return 0;
    }

    return finalMin;
};