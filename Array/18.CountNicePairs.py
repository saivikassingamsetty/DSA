"""
You are given an array nums that consists of non-negative integers. 
Let us define rev(x) as the reverse of the non-negative integer x. For example, rev(123) = 321, and rev(120) = 21. 
A pair of indices (i, j) is nice if it satisfies all of the following conditions:

0 <= i < j < nums.length
nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
Return the number of nice pairs of indices. Since that number can be too large, return it modulo 10**9 + 7.
"""
def countNicePairs(nums: list[int]) -> int:
    #find difference list as i-rev(i) == j-rev(j), always try to make one.
    diff = [i-int(str(i)[::-1]) for i in nums]
    #count similar values
    count = {}
    Sum = 0
    for i in diff:
        if i in count: count[i] += 1
        else: count[i] = 1
    #count pairs
    for val in count.values():
        Sum += ((val*(val-1))//2)
    return Sum%(10**9+7)