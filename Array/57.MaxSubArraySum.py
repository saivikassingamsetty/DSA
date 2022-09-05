"""
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.
"""
def maxSubArray(nums: list[int]) -> int:
    #Kadane
    maxSum, currSum = nums[0],0
    for i in nums:
        if currSum+i < i:
            currSum = i
        else:
            currSum += i
        maxSum = max(maxSum, currSum)
    return maxSum