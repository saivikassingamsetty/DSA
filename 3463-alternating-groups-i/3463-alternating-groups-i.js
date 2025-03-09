/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
    let cnt = 0;
    let n = colors.length;

    for (let i = 0; i < n; i++) {
        if (colors[i] != (colors[i - 1] ?? colors[n - 1]) && colors[i] != (colors[i + 1] ?? colors[0])) cnt++;
    }

    return cnt;
};