/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // let dp = new Array(nums.length).fill(0);

    // for (let i=0; i<nums.length; i++) {
    //     dp[i] = Math.max((dp[i-1] || 0), (dp[i-2] || 0) + nums[i]);
    // }

    // return dp[dp.length-1];

    const dfs = (i) => {
        if (i == 0) {
            return [nums[i], 0];
        }

        let [included, excluded] = dfs(i-1);
        
        return [nums[i] + excluded, Math.max(included, excluded)];
    }

    return Math.max(...dfs(nums.length-1));
};