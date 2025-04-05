"""
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
"""
def runningSum(nums: list[int]) -> list[int]:
    n = len(nums)
    pref = [0]*n
    pref[0] = nums[0]
    for i in range(1, n):
        pref[i] = pref[i-1] + nums[i]
    return pref