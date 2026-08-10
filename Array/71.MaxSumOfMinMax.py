"""
Given an array, find maximum sum of smallest and second smallest elements chosen from all possible sub-arrays. 
More formally, if we write all (nC2) sub-arrays of array of size >=2 and 
find the sum of smallest and second smallest, then our answer will be maximum sum among them.

"""
def pairWithMaxSum(arr, N):
    res = 0
    for i in range(N-1):
        res = max(res, arr[i] + arr[i+1])
    return res