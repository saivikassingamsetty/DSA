"""
Implement the next permutation, which rearranges the list of numbers into Lexicographically next greater permutation of list of numbers. 
If such arrangement is not possible, it must be rearranged to the lowest possible order i.e. 
sorted in an ascending order. You are given an list of numbers arr[ ] of size N.
"""
def nextPermutation(nums: list[int]) -> None:
    """
    Do not return anything, modify nums in-place instead.
    """
    s = -1
    n = len(nums)
    for i in range(n-2,-1,-1):
        if nums[i] < nums[i+1]:
            s = i
            break
    if s == -1:
        for i in range(n//2):
            nums[i], nums[n-i-1] = nums[n-i-1], nums[i]
    else:
        for i in range(n-1,s,-1):
            if nums[i] > nums[s]:
                e = i
                break
        nums[s],nums[e] = nums[e], nums[s]
        for i in range((n-s-1)//2):
            nums[i+s+1], nums[n-i-1] = nums[n-i-1], nums[i+s+1]