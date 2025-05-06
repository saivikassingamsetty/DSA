"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
"""
def twoSum(nums: list, target: int) -> list:
    dic = {}
    n = len(nums)
    for i in range(n):
        if target-nums[i] in dic:
            return [dic[target-nums[i]], i]
        else:
            dic[nums[i]] = i