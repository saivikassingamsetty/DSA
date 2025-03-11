/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
    let map = { 'a': 0, 'b': 0, 'c': 0 };
    let res = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        map[s[right]]++;

        while (left < right && map.a > 0 && map.b > 0 && map.c > 0) {
            res += s.length - right;
            map[s[left]]--;
            left++;
        }
    }

    return res;
};