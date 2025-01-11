/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let dict = { 0: 1 };
    let prefixSum = 0;
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        // prefix sum on the fly
        prefixSum += nums[i];
        
        //if prefixsum -k is seen it means we got a subarrays with sum k, track those
        if (dict[prefixSum - k]) res += dict[prefixSum - k];

        //add the prefix sum to dictionary
        dict[prefixSum] = (dict[prefixSum] || 0) + 1;
    }

    return res;
};