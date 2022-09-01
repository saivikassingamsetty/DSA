"""
Given an array nums, return true if the array was originally sorted in non-decreasing order,
then rotated some number of positions (including zero). Otherwise, return false.
"""
def check(nums) -> bool:
    sorted_nums = sorted(nums)
    for i in range(len(nums)):
        if nums[i+1:] + nums[:i+1] == sorted_nums:
            return True
    return False