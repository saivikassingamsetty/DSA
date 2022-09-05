"""
Given a binary array nums, return the maximum number of consecutive 1's in the array.
"""
def findMaxConsecutiveOnes(nums: list[int]) -> int:
    left = 0
    max1 = 0
    for right in range(len(nums)):
        if not nums[right]:
            left = right+1
        max1 = max(max1, right-left+1)
    return max1