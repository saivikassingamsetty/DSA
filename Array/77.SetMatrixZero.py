"""
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
"""
def setZeroes(matrix: list[list[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    first = matrix[0][0]
    m,n = len(matrix), len(matrix[0])
    row = int(0 in matrix[0])
    col = 0
    for i in range(m):
        if not matrix[i][0]:
            col = 1
            
    #saving in first row and first column if element is 0
    for i in range(m):
        for j in range(n):
            if not matrix[i][j]:
                matrix[0][j] = matrix[i][0] = 0
    #iterating
    for i in range(1,m):
        for j in range(1,n):
            if matrix[i][j]:
                if not matrix[0][j] or not matrix[i][0]:
                    matrix[i][j] = 0
    if not first:
        for i in range(m):
            matrix[i][0] = 0
        for j in range(n):
            matrix[0][j] = 0
    if row:
        for j in range(n):
            matrix[0][j] = 0
    if col:
        for i in range(m):
            matrix[i][0] = 0