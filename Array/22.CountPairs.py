"""
Given a 0-indexed integer array nums of length n and an integer k, 
return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
"""
def countPairs(nums: list[int], k: int) -> int:
    n = len(nums)
    numPairs = 0
    for i in range(n):
        for j in range(i+1, n):
            if nums[i] == nums[j] and (i*j)%k == 0:
                numPairs += 1
    return numPairs