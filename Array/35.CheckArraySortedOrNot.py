"""
Given an array arr[] of size N, check if it is sorted in non-decreasing order or not. 
"""
def arraySortedOrNot(arr, n):
    for i in range(n-1):
        if arr[i] > arr[i+1]:
            return 0
    return 1