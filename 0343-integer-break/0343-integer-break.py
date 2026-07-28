class Solution:
    def integerBreak(self, n: int) -> int:
        # Visualize - done
        # Sub Problems - f(n) here f(n) represent max product for number n
        # Relationship - f(10) = max(f(8) X f(2), f(7) X f(3)) etc..
        # Generalize - f(i) = max(f(i-j) X f(j)) for j = 1 -> n, but wait it wont store the best values, for example 2 answer is 1 but when 2 is being used as one of the break value then we shouldnt use best product but we shouldnt split itself.
        # so f(i) = max(max(i-j, f(i-j)) X max(j, f(j))) for j = 1 -> n
        # Implement

        dp = [1] * (n + 1)

        # base case
        dp[1] = 1

        # reccurrance
        for i in range(2, n + 1):
            for j in range(1, i):
                dp[i] = max(dp[i], max(j, dp[j]) * max(i - j, dp[i - j]))

        return dp[n]
