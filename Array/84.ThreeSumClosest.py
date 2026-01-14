"""
Given an array A[] of N integers and an integer X. 
The task is to find the sum of three integers in A[] such that it is closest to X.
"""
def closest3Sum(self, A, N, X):
    A.sort()
    res = 1e4
    for a in range(N):
        if a > 0 and A[a] == A[a-1]: continue
        l,r = a+1,N-1
        while l<r:
            if A[l] + A[r] + A[a] == X:
                return X
            elif A[l] + A[r] + A[a] > X:
                if abs(A[l] + A[r] + A[a] - X) < abs(res-X):
                    res = A[l] + A[r] + A[a]
                r -= 1
            else:
                if abs(A[l] + A[r] + A[a] - X) < abs(res-X):
                    res = A[l] + A[r] + A[a]
                l += 1
    return res