/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    let left = 0;
    let n = colors.length;
    let res = 0;

    for (let right = 0; right < n + k - 1; right++) {
        //if found a consecutive same, shrink the window
        if (right > 0 && colors[right % n] == colors[(right - 1) % n]) left = right;

        //expand the window
        if (right - left + 1 >= k) res++;
    }

    return res;
};