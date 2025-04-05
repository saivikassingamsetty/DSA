"""
Given an binary array nums and an integer k, return true if all 1's are at least k places away from each other, otherwise return false.
"""
def kLengthApart(nums: list[int], k: int) -> bool:
    indeces = [i for i in range(len(nums)) if nums[i]]
    for i in range(len(indeces)-1):
        if indeces[i+1] - indeces[i] <= k:
            return False
    return True