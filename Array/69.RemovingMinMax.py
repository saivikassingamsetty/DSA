"""
You are given a 0-indexed array of distinct integers nums.

There is an element in nums that has the lowest value and an element that has the highest value. We call them the minimum and maximum respectively. Your goal is to remove both these elements from the array.

A deletion is defined as either removing an element from the front of the array or removing an element from the back of the array.

Return the minimum number of deletions it would take to remove both the minimum and maximum element from the array.
"""
def minimumDeletions(nums: list[int]) -> int:
    n = len(nums)
    a = nums.index(min(nums))
    b = nums.index(max(nums))
    a,b = min(a,b), max(a,b)
    return min(b+1, n-a, a+1+n-b)