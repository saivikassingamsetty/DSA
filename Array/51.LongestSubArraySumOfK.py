"""
Given an array containing N integers and an integer K., \
Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K.
"""
def lenOfLongSubarr (arr, n, k) : 
    left = maxL = sumA = 0
    for right in range(n):
        sumA += arr[right]
        while sumA > k:
            sumA -= arr[left]
            left += 1
        if sumA == k:
            maxL = max(maxL, right-left+1)
    return maxL