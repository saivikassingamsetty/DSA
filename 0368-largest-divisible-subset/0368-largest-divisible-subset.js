/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    let n = nums.length;
    let dp = new Array(nums.length).fill(1);
    let prev = new Array(nums.length).fill(-1);
    let max = 1;
    let maxI = 0;

    //sort is needed to ensure that we can optimally track the divisibility
    nums.sort((a, b) => a - b);

    //updating dp array dp[i] - maximum length till i
    //get a pair and update the dp list
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] + 1 > dp[i] && nums[i] % nums[j] == 0) {
                dp[i] = dp[j] + 1;
                //to help in restructure from dp array to result
                prev[i] = j;
            }
        }

        //store the last index which is needed for tracking along with max length
        if (max < dp[i]) {
            max = dp[i];
            maxI = i;
        }
    }

    let res = [];
    // restructure
    for (let i = maxI; i >= 0; i = prev[i]) {
        res.push(nums[i]);
    }

    return res.reverse();
};