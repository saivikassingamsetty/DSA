"""
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn)
such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
"""
def arrayPairSum(nums: list) -> int:
    nums.sort()
    n = len(nums)
    res = 0
    for i in range(0,n,2):
        res += nums[i]
    return res