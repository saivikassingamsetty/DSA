/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    let count = 0;

    while(start || goal) {
        if (start%2 != goal%2) count++;
        start = Math.floor(start/2);
        goal = Math.floor(goal/2);
    }

    return count;
};