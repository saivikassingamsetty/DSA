"""
Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.
"""
def numIdenticalPairs(nums: list[int]) -> int:
    # o(n2) time
    # n = len(nums)
    # numPairs = 0
    # for i in range(n-1):
    #     for j in range(i+1, n):
    #         if nums[i] == nums[j]:
    #             numPairs += 1
    # return numPairs

    #o(n) time
    counter = {}
    res = 0
    for i in nums:
        if i in counter: counter[i] += 1
        else: counter[i] = 1
    for i in counter:
        #nc2 combinations!
        res += (counter[i]*(counter[i]-1))//2
    return res