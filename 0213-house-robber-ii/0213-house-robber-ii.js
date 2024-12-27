/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length == 1) return nums[0];
    
    const houseRobber = (start, end) => {
        let dp = new Array(end-start).fill(0);

        for (let i = start; i < end; i++) {
            dp[i] = Math.max((dp[i - 1] || 0), (dp[i - 2] || 0) + nums[i]);
        }

        return dp[dp.length - 1];
    }

    return Math.max(houseRobber(0, nums.length - 1), houseRobber(1, nums.length));
};