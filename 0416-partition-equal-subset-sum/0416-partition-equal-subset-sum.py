class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)

        if total % 2 == 1:
            return False

        halfsum = total // 2
        dp = [False] * (halfsum + 1)  # whether there is a subset till i with sum of sum
        dp[0] = True  # obvious and base case

        for num in nums:
            for sumSoFar in range(halfsum, num - 1, -1): # iterating backwards so we can use old results of i-1
                dp[sumSoFar] = dp[sumSoFar] or dp[sumSoFar - num]  # include or exclude

        return dp[halfsum]
