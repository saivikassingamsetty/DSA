/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    // can robber rob at least k rouses with this capability?
    const canRobKHouses = (capability) => {
        let dp = new Array(nums.length + 1).fill(0);

        dp[1] = (nums[0] <= capability) ? 1 : 0;

        for (let i = 2; i < nums.length + 1; i++) {
            dp[i] = Math.max(dp[i - 1], nums[i - 1] <= capability ? 1 + dp[i - 2] : -Infinity);
        }

        return dp[nums.length] >= k;
    }

    let l = 0;
    let r = Math.max(...nums);
    let res = r;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (canRobKHouses(mid)) {
            res = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return res;
};