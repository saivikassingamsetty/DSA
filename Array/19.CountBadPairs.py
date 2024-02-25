"""
You are given a 0-indexed integer array nums. 
A pair of indices (i, j) is a bad pair if i < j and j - i != nums[j] - nums[i].

Return the total number of bad pairs in nums.
"""
def countBadPairs(nums: list[int]) -> int:
    n = len(nums)
    #nc2
    totalPairs = (n*(n-1))//2
    
    #pairs with equal diff
    diff = [i-nums[i] for i in range(n)]
    
    #count similar values
    count = {}
    equalPairs = 0
    for i in diff:
        if i in count: count[i] += 1
        else: count[i] = 1
    
    #counting equal pairs
    for val in count.values():
        #nc2
        equalPairs += (val*(val-1))//2
    
    return totalPairs-equalPairs