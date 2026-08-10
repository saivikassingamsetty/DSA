"""
Given a matrix of size N x M.
 You have to find the Kth element which will obtain while traversing the matrix spirally starting from the top-left corner of the matrix.
"""
def findK(a, n, m, k):
    left,right,up,down = 0,m,0,n
    while left<right and up<down:
        for j in range(left,right):
            k -= 1
            if not k: return a[up][j]
        up += 1
        for i in range(up,down):
            k -= 1
            if not k: return a[i][right-1]
        right -= 1
        for j in range(right-1,left-1,-1):
            k -= 1
            if not k: return a[down-1][j]
        down -= 1
        for i in range(down-1,up-1,-1):
            k -= 1
            if not k: return a[i][left]
        left += 1