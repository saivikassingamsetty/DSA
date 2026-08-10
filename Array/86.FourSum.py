"""
Given an array of integers and another number. 
Find all the unique quadruple from the given array that sums up to the given number.
"""
def fourSum(arr, k):
    def threeSum(arr, i, val):
        temp = []
        n = len(arr)
        for a in range(i, n):
            if a>0 and a != i and arr[a] == arr[a-1]: continue
            l,r = a+1,n-1
            while l<r:
                if arr[l]+arr[r]+arr[a] == val:
                    temp.append((arr[i-1],arr[a],arr[l],arr[r]))
                    l += 1
                    r -= 1
                    while 0<=l<n and arr[l] == arr[l-1]: l+= 1
                    while 0<=r<n and arr[r] == arr[r+1]: r-= 1
                elif arr[l]+arr[r]+arr[a] > val:
                    r -= 1
                else:
                    l += 1
        return temp
        
    arr.sort()
    res = []
    n = len(arr)
    for a in range(n):
        if a>0 and arr[a] == arr[a-1]: continue
        res.extend(threeSum(arr, a+1, k-arr[a]))
    return res