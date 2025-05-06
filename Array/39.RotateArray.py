"""
Given an array arr[] of size N and an integer K, the task is to left rotate the array K indexes
"""
def leftRotate(arr, k, n):
    k %= n
    if k:
        arr.extend(arr[:k])
        for i in range(n):
            arr[i] = arr[i+k]
        del arr[n:]