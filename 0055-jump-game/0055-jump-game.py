from functools import lru_cache


class Solution:
    def canJump(self, nums: list[int]) -> bool:
        n = len(nums)

        @lru_cache(maxsize=None)
        def solve(i):
            if i == n - 1:
                return True

            maxJump = min(i + nums[i], n - 1)
            for pos in range(i + 1, maxJump + 1):
                if solve(pos):
                    return True

            return False

        return solve(0)
