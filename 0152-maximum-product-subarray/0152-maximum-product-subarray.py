class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        prev_min = prev_max = glob_max = nums[0]
        for i in nums[1:]:
            curr_min = min(prev_min*i, prev_max*i, i)
            curr_max = max(prev_max*i, prev_min*i, i)
            glob_max = max(glob_max, curr_max)
            prev_min = curr_min
            prev_max = curr_max
        return glob_max