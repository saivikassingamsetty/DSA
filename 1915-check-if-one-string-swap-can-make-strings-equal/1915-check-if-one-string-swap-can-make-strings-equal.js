/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    if (s1.length != s2.length) return false;

    let a = '';
    let b = '';
    let swapped = false;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            if (swapped) return false;
            if (!a) {
                [a, b] = [s1[i], s2[i]];
            } else {
                if (s1[i] == b && s2[i] == a) {
                    swapped = true;
                } else {
                    return false;
                }
            }
        }
    }

    return (a ? swapped : true);
};