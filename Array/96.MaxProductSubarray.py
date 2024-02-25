"""
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
"""
def maxProduct(nums: list[int]) -> int:
    #inclusing prev_min as it can lead to make a strong positive if curr element is -ve.
    prev_min = prev_max = glob_max = nums[0]
    for i in nums[1:]:
        #to collect min
        curr_min = min(prev_min*i, prev_max*i, i)
        #to collect max
        curr_max = max(prev_max*i, prev_min*i, i)
        #global
        glob_max = max(glob_max, curr_max)
        #update variables
        prev_min = curr_min
        prev_max = curr_max
    return glob_max