/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
    let start = 0;
    let count = 0;
    let currentCount = 0;
    let res = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] & 1) {
            count++;
            currentCount = 0;
        }

        while (count == k) {
            if (nums[start] & 1) count--;
            start++;
            currentCount++;
        }

        res += currentCount;
    }

    return res
};