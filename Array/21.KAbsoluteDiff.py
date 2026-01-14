"""
Given an integer array nums and an integer k, 
return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.
"""
def countKDifference(nums: list[int], k: int) -> int:
    count = {}
    numPairs = 0
    for i in nums:
        if i in count: count[i] += 1
        else: count[i] = 1
    for i in nums:
            #count i+k 
            numPairs += count[i+k] if i+k in count else 0
            #count i-k
            numPairs += count[i-k] if i-k and i-k in count else 0
            #making this unaccessable as they must not repeat!
            count[i] -= 1
    return numPairs