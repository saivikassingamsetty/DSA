/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    let dict = {};
    let n = nums.length - 1;
    for (let num of nums) {
        if (!dict[num]) dict[num] = 0
        dict[num]++;
        if (num < n && dict[num] == 2) return false
        else if (num > n) return false
        else if (num == n && dict[num] > 2) return false;
    }

    return true;
};