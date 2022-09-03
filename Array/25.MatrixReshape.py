"""
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
"""
def matrixReshape(mat: list[list[int]], r: int, c: int) -> list[list[int]]:
    m,n = len(mat), len(mat[0])
    #if size mismatch
    if m*n != r*c: return mat
    #creating matrix
    newMatrix = [[0 for i in range(c)] for j in range(r)]
    i,j = 0,0
    ni, nj = 0,0
    while i<m and j<n:
        #copying data
        newMatrix[ni][nj] = mat[i][j]
        #placing the next pointers accordingly
        if nj == c-1:
            ni += 1
            nj = 0
        else:
            nj += 1
        if j == n-1:
            i += 1
            j = 0
        else:
            j += 1
    return newMatrix