"""
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
"""
import collections

def fourSumCount(nums1: list[int], nums2: list[int], nums3: list[int], nums4: list[int]) -> int:
    #O(n2) O(n2)
    AB = collections.Counter([A+B for A in nums1 for B in nums2])
    return sum(AB[-C-D] for C in nums3 for D in nums4)