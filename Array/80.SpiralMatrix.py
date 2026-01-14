"""
Given an m x n matrix, return all elements of the matrix in spiral order.
"""
def spiralOrder(matrix: list[list[int]]) -> list[int]:
    m,n = len(matrix), len(matrix[0])
    left,right,up,down = 0,n,0,m
    res = []
    while left<right and up<down:
        #right
        for j in range(left,right):
            res.append(matrix[up][j])
        up += 1
        #down
        for i in range(up,down):
            res.append(matrix[i][right-1])
        right -= 1
        #left
        for j in range(right-1, left-1, -1):
            res.append(matrix[down-1][j])
        down -= 1
        #up
        for i in range(down-1, up-1, -1):
            res.append(matrix[i][left])
        left += 1
    return res[:m*n]