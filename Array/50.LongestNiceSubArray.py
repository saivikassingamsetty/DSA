"""
You are given an array nums consisting of positive integers.

We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.

Return the length of the longest nice subarray.

A subarray is a contiguous part of an array.

Note that subarrays of length 1 are always considered nice.
"""
def longestNiceSubarray(nums: list[int]) -> int:
    left = AND = maxAnd = 0
    for right in range(len(nums)):
        while nums[right] & AND:
            #erase from left till it obeys
            AND ^= nums[left]
            left += 1
        #add the element as it obeys to AND! (checks the internal ands)
        AND |= nums[right]
        maxAnd = max(maxAnd, right-left+1)
    return maxAnd