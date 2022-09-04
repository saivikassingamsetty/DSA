"""
Given an array Arr of size N, print second largest element from an array.
"""
def print2largest(arr, n):
    first = -1e7
    second = -1e7
    if len(set(arr)) == 1: return -1
    for num in arr:
        if num > first:
            second = first
            first = num
        elif second < num and num < first:
            second = num
    return second