"""
Given an unsorted array Arr of N positive and negative numbers. 
Your task is to create an array of alternate positive and negative numbers without changing the relative order of positive and negative numbers.
Note: Array should start with positive number.
"""
def rearrange(arr, n):
    pos = [i for i in arr if i >= 0]
    neg = [i for i in arr if i < 0]
    m,p = len(pos), len(neg)
    res = []
    minLen = min(m,p)
    for i in range(minLen):
        res += [pos[i], neg[i]]
    if minLen == m:
        res.extend(neg[minLen:])
    else:
        res.extend(pos[minLen:])
    for i in range(n):
        arr[i] = res[i]