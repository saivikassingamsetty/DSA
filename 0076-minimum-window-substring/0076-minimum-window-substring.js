/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let right = 0;
    let left = 0;

    let tMap = {};
    for (let char of t) {
        tMap[char] = (tMap[char] || 0) + 1;
    }

    let windowCounts = {};
    const required = Object.keys(tMap).length;
    let formed = 0;
    let min = Infinity;
    let res = [0, 0];

    while (right < s.length) {
        const char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (tMap[char] && windowCounts[char] == tMap[char]) {
            formed++;
        }

        while (left <= right && formed === required) {
            const charLeft = s[left];

            if (min > right - left + 1) {
                min = right - left + 1;
                res = [left, right];
            }

            windowCounts[charLeft]--;

            if (tMap[charLeft] && windowCounts[charLeft] < tMap[charLeft]) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return min === Infinity ? '' : s.slice(res[0], res[1] + 1);
};