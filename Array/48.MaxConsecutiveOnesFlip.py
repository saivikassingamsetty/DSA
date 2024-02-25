"""
Given a binary array arr of size N and an integer M. 
Find the maximum number of consecutive 1's produced by flipping at most M 0's.
"""
def findZeroes(arr, n, m) :
    #sliding window
    left = 0
    max1 = 0
    for right in range(n):
        if not arr[right]:
            if m:
                m -= 1
            else:
                while arr[left]:
                    left += 1
                else:
                    left += 1
        max1 = max(max1, right-left+1)
    return max1