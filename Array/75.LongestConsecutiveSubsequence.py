"""
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
"""
def longestConsecutive(nums: list[int]) -> int:
    # if not nums: return 0
    # maxm = max(nums)
    # minm = min(nums)
    # streak = [0]*(maxm-minm+1)
    # for i in set(nums):
    #     streak[i-minm] = 1
    # maxStreak = 0
    # curr = 0
    # for i in range(maxm-minm+1):
    #     if streak[i]:
    #         curr += 1
    #     else:
    #         maxStreak = max(maxStreak, curr)
    #         curr = 0
    # maxStreak = max(maxStreak, curr)
    # return maxStreak
    
    longest = 0
    s = set(nums)
    for num in s:
        if num-1 in s: continue
        j = 1
        while num+j in s:
            j += 1
        longest = max(longest, j)
    return longest