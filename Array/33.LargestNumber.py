"""
Given an array A[] of size n. The task is to find the largest element in it.
"""
def largest(arr, n):
    maxNum = arr[0]
    for num in arr:
        if num > maxNum: maxNum = num
    return maxNum