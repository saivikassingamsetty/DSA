from functools import lru_cache


class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        # how about if we find a subset with sum = half?
        total = sum(nums)
        if total % 2 == 1:
            return False
        halfsum = total // 2
        n = len(nums)

        @lru_cache(maxsize=None)
        def findSubsets(index, subset_sum):
            if subset_sum == halfsum:
                return True
            if index == n:
                return False

            return findSubsets(index + 1, subset_sum + nums[index]) or findSubsets(
                index + 1, subset_sum
            )  # include or exclude current

        return findSubsets(0, 0)
