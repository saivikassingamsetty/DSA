"""
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
The tests are generated such that there is exactly one solution. You may not use the same element twice.
Your solution must use only constant extra space.
"""
def twoSum(numbers: list, target: int):
    n = len(numbers)
    #traversing through the list
    for i in range(n):
        #binary search as the array is sorted
        left, right = i+1,n-1
        while left <= right:
            mid = left + (right-left)//2
            if numbers[mid] + numbers[i] == target:
                return [i+1, mid+1]
            elif numbers[mid] + numbers[i] > target:
                right = mid-1
            else:
                left = mid+1