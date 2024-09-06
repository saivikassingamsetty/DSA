/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
    piles.sort((a, b) => b - a);

    return piles.reduce((acc, i, index) => {
        if (index % 2 === 1 && index < Math.floor((piles.length * 2) / 3)) acc += i;
        return acc;
    }, 0)
};