/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let isTracked = false;
    let count = 0;

    for (let ch of s) {
        if(ch == '|') isTracked = !isTracked;
        else {
            if (!isTracked) count += (ch == '*' ? 1: 0);
        }
    }

    return count;
};