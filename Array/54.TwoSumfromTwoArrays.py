"""
Given two unsorted arrays A of size N and B of size M of distinct elements, 
the task is to find all pairs from both arrays whose sum is equal to X.
"""
def allPairs(A, B, N, M, X):
    # A.sort()
    # res = []
    # for num in B:
    #     l,r = 0,N-1
    #     while l<=r:
    #         print(l,r)
    #         mid = l+((r-l)//2)
    #         if A[mid] + num == X:
    #             # res.append((A[mid], num))
    #             res = []
    #         elif A[mid] + num > X:
    #             r = mid-1
    #         else:
    #             l = mid+1
    # return res
    Arr1 = set(B)
    res = []
    for num in A:
        if X-num in Arr1:
            res.append((num, X-num))
    return sorted(res, key = lambda x: x[0])