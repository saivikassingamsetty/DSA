class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)

        if total % 2 == 1:
            return False

        target = total // 2
        dp = 1  # sum 0 possible

        for num in nums:
            # stores all combinations of subset sums (including and excluding current) with left shift (means addition)
            dp |= dp << num

        # checks whether target sum bit set or not with right shift
        return (dp >> target) & 1 == 1
