/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let prefixSum = 0;
    let prefixArray = { '0': 1 };
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += (nums[i] % 2 == 0 ? 0 : 1);
        res += (prefixArray[prefixSum - k] || 0);
        prefixArray[prefixSum] = (prefixArray[prefixSum] || 0) + 1;
    }

    return res;
};