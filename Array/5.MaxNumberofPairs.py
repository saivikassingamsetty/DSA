"""
You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and 
answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.
"""
def numberOfPairs(self, nums: list) -> list:
    nums.sort()
    n = len(nums)
    if n == 1: return [0,1]
    res = [0,0]
    i = 0
    while i < n-1:
        if nums[i] == nums[i+1]:
            res[0] += 1
            i += 2
        else:
            res[1] += 1
            i += 1
    else:
        if i == n-1:
            res[1] += 1
    return res