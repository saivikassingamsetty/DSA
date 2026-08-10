"""
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should rearrange the elements of nums such that the modified array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.
"""
def rearrangeArray(nums: list[int]) -> list[int]:
    a=[0]*len(nums)
    p=0
    n=1
    for i in nums:
        if i>0:
            a[p]=i
            p+=2
        else:
            a[n]=i
            n+=2
    return a