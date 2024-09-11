/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let prefixSum = 0;
    let res = 0;

    nums.forEach(i => {
        if (prefixSum >= i) {
            prefixSum++;
            res += (prefixSum-i);
        } else {
            prefixSum = i;
        }
    });

    return res;
};