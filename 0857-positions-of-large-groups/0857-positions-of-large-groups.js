/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
    let left = 0;
    let res = [];
    let right;

    for (right = 1; right < s.length; right++) {
        if (s[right] != s[right - 1]) {
            //valid group
            if (right - left >= 3) {
                res.push([left, right-1]);
            }

            left = right;
        }
    }

    if (right - left >= 3) res.push([left, right-1]);

    return res;
};