"""
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
if array has -ves or 0, the sliding window will fail, so prefixsum + dictionary!
"""
def subarraySum(nums: list[int], k: int) -> int:
    #if prefix sum is 0, need to return 1 as the number itself be the k, the base case.
    ans, prefixSum, d = 0, 0, {0:1}
    
    for num in nums:
        #build prefix sum
        prefixSum += num
        #if remaining sum in prefix sum dict, add all the instances
        if prefixSum - k in d:
            ans += d[prefixSum-k]
        #if prefix sum there, increment else initialise.
        d[prefixSum] = d.get(prefixSum, 0) + 1
    
    return ans