/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let maxDepth = 0;

    for (let ch of s) {
        if (ch == '(') {
            depth++;
            maxDepth = Math.max(depth, maxDepth);
        } else if (ch == ')') {
            depth--;
        }
    }

    return maxDepth;
};