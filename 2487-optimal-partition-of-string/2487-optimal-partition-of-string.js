/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
    let visited = new Set();
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (visited.has(s[i])) {
            res++;
            visited.clear();
        }

        visited.add(s[i]);
    }

    return visited.size ? res+1: res;
};