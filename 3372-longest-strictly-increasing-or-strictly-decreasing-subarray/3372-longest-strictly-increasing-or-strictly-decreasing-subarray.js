/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let n = nums.length;
    let res = 1;
    let copy = []

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (j - i > res) {
                copy = nums.slice(i, j);
                copy2 = [...copy].sort((a, b) => a - b);
                if (copy.length != new Set(copy).size) continue;
                if (copy.join('_') == copy2.join('_') || copy.join('_') == copy2.reverse().join('_')) {
                    res = j - i;
                }
            }
        }
    }

    return res;
};