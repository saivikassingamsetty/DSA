"""
Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]), 
such that 0 <= i < j < n and nums[i] < nums[j].

Return the maximum difference. If no such i and j exists, return -1.
"""
def maximumDifference(nums: list[int]) -> int:
    minm = 1e9
    diff = -1
    for num in nums:
        if num <= minm:
            minm = num
        else:
            diff = max(diff, num-minm)
    return diff