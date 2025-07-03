/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
    const subarrayCountWithSumAtMost = (k) => {
        if (k < 0) return 0

        let start = 0;
        let count = 0;
        let res = 0;

        for (let end = 0; end < nums.length; end++) {
            count += nums[end];

            while (count > k && start <= end) count -= nums[start++];

            // possible starting points when we fix end point in valid window
            res += (end - start + 1)
        }

        return res;
    }

    return subarrayCountWithSumAtMost(goal) - subarrayCountWithSumAtMost(goal - 1);
};