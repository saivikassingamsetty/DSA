"""
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The relative order of the elements may be changed.
Return k after placing the final result in the first k slots of nums.
Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
"""
def removeElement(nums: list[int], val: int) -> int:
    n = len(nums)
    i,j = 0,n-1
    while i <= j:
        if nums[i] == val:
            nums[i], nums[j] = nums[j], nums[i]
            j -= 1
        else:
            i += 1
    return i