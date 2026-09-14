from functools import lru_cache

class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        n, m = len(s), len(p)

        @lru_cache(maxsize=None)
        def solve(i, j):
            # if both reached end
            if j == m:
                return i == n

            # if char is . or char
            first_match = i < n and (s[i] == p[j] or p[j] == ".")

            # if next char is *
            if j + 1 < m and p[j + 1] == "*":
                skip = solve(i, j + 2)
                take = first_match and solve(i + 1, j) # first_match should be at first to skip the short circuit and going in a recursive call
                return skip or take

            # if match, check next
            return first_match and solve(i + 1, j + 1)

        return solve(0, 0)
