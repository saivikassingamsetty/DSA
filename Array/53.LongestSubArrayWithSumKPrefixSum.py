"""
Given an array containing N integers and an integer K., \
Your task is to find the length of the longest Sub-Array with the sum of the elements equal to the given value K.
"""
def lenOfLongSubarr (arr, n, k) : 
        ans, prefix, d = 0,0, {0:-1}
        for i in range(n):
            prefix += arr[i]
            if prefix-k in d:
                ans = max(ans, i-d[prefix-k])
            if prefix not in d:
                d[prefix] = i
        return ans