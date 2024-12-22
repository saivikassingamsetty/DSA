"""
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
"""
def threeSum(nums: list[int]) -> list[list[int]]:
    nums.sort()
    n = len(nums)
    res = []
    for a in range(n):
        if a > 0 and nums[a] == nums[a-1]: continue
        l,r = a+1,n-1
        while l<r:
            if nums[l] + nums[r] == -nums[a]:
                res.append((nums[a],nums[l],nums[r]))
                l += 1
                r -= 1
                while 0<=l<n and nums[l] == nums[l-1]:
                    l += 1
                while 0<=r<n and nums[r] == nums[r+1]:
                    r -= 1
            elif nums[l] + nums[r] > -nums[a]:
                r -= 1
            else:
                l += 1
    return res