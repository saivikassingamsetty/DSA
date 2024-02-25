"""
Given an array arr[] sorted in ascending order of size N and an integer K. Check if K is present in the array or not.
"""
def searchInSorted(arr, N, K):
    l,r = 0, N-1
    while l<=r:
        mid = l + (r-l)//2
        if arr[mid] == K:
            return 1
        elif arr[mid] > K:
            r = mid-1
        else:
            l = mid+1
    return -1