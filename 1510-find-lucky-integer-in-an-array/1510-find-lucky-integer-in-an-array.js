/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let freq = {};
    let lucky = 0;

    for (let i of arr) freq[i] = (freq[i] || 0) + 1;
    for (let key in freq) if (freq[key] == key) lucky = Math.max(lucky, key);

    return lucky ? lucky : -1;
};