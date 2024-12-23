/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    return [...stones].filter(stone => jewels.indexOf(stone) != -1).length;
};