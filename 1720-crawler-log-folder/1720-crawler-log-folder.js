/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;

    for (let log of logs) {
        if (log == '../') depth = Math.max(depth-1, 0);
        else if (log == './') continue;
        else depth++;
    }

    return depth;
};