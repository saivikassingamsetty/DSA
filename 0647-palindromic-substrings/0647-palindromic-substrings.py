class Solution:
    def countSubstrings(self, s: str) -> int:
        n = len(s)
        dp = [[False for _ in range(n + 1)] for _ in range(n + 1)]
        count = 0

        for start in range(n - 1, -1, -1):
            for end in range(start + 1, n + 1):
                if end - start <= 2:
                    dp[start][end] = s[start] == s[end - 1]
                else:
                    dp[start][end] = dp[start + 1][end - 1] and s[start] == s[end - 1]

                if dp[start][end]:
                    count += 1

        return count
