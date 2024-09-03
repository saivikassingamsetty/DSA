/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let res = 0;

    nums.forEach((value, index) => {
        let bin = index.toString(2);
        let count = 0;
        for (let ch of bin) if (ch == '1') count++;

        if (count == k) res += value;
    });

    return res;
};