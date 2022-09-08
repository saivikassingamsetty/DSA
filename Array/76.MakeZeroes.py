"""
Given a matrix of  size n x m. Your task is to make Zeroes, that means in whole matrix when you find a zero,
 convert its upper, lower, left, and right value to zero and make that element the sum of the upper, lower, left and right value. 
 Do the following tasks according to the initial matrix.
"""
def MakeZeros(matrix):
    m,n = len(matrix), len(matrix[0])
    res = [[-1 for i in range(n)] for j in range(m)]
    for i in range(m):
        for j in range(n):
            if matrix[i][j] and res[i][j] == -1:
                res[i][j] = matrix[i][j]
            elif not matrix[i][j]:
                res[i][j] = 0
                if i>0: 
                    res[i-1][j] = 0
                    res[i][j] += matrix[i-1][j]
                if j > 0:
                    res[i][j-1] = 0
                    res[i][j] += matrix[i][j-1]
                if i < m-1: 
                    res[i+1][j] = 0
                    res[i][j] += matrix[i+1][j]
                if j < n-1: 
                    res[i][j+1] = 0
                    res[i][j] += matrix[i][j+1]
    for i in range(m):
        for j in range(n):
            matrix[i][j] = res[i][j]