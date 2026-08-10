"""
Given an array having both positive and negative integers. 
The task is to compute the length of the largest subarray with sum 0.
"""
def maxLen(n, arr):
    dic = {0:-1}
    res = 0
    pre = 0
    for i in range(n):
        pre += arr[i]
        if pre in dic:
            res = max(res, i-dic[pre])
        else:
            dic[pre] = i
    return res