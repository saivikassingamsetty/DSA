/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let res = 0;
    let left = 0;
    let usedBits = 0;
    for (let right = 0; right < nums.length; right++) {
        //till there is a conflict, shrink the window from left
        while ((usedBits & nums[right]) != 0) {
            //remove old bits from usedBits
            usedBits ^= nums[left++];
        }

        //add current num to usedBits
        usedBits |= nums[right];

        //as its valid, store result
        res = Math.max(res, right - left + 1);
    }

    return res;
};