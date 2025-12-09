"""
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
"""
def rotate(matrix: list[list[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    #transpose
    n = len(matrix)
    for i in range(n):
        for j in range(i+1):
            matrix[i][j],matrix[j][i] = matrix[j][i], matrix[i][j]
    #rotation
    for i in range(n):
        for j in range(n//2):
            matrix[i][j],matrix[i][n-1-j] = matrix[i][n-1-j], matrix[i][j]