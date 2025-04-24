/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
    // it can be done with sliding window

    let distinctCount = new Set(nums).size;
    let res = 0;
    let left = 0;
    let right = 0;
    let currMap = new Map();

    while (right < nums.length) {
        // extend from right
        currMap.set(nums[right], (currMap.get(nums[right]) || 0) + 1);

        // shrink from left till it breaks the condition 
        while (currMap.size === distinctCount) {
            //count the valid sub arrays
            res += nums.length - right;
            let leftCount = currMap.get(nums[left]);
            if (leftCount > 1) {
                currMap.set(nums[left], leftCount - 1);
            } else {
                currMap.delete(nums[left]);
            }
            left++;
        }

        right++;
    }

    return res;
};