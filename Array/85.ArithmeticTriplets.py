"""
You are given a 0-indexed, strictly increasing integer array nums and a positive integer diff. 
A triplet (i, j, k) is an arithmetic triplet if the following conditions are met:

i < j < k,
nums[j] - nums[i] == diff, and
nums[k] - nums[j] == diff.
Return the number of unique arithmetic triplets.
"""
def arithmeticTriplets(nums: list[int], diff: int) -> int:
    nums.sort()
    n = len(nums)
    res = 0
    for a in range(n):
        l,r = a+1,n-1
        while l<r:
            if nums[l] - nums[a] > diff:
                break
            elif nums[l] - nums[a] == diff and nums[r] - nums[l] == diff:
                res += 1
                l += 1
                r -= 1
            elif nums[l] - nums[a] < diff or nums[r] - nums[l] < diff:
                l += 1
            else:
                r -= 1
    return res