"""
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
"""
def diagonalSum(self, mat: list[list[int]]) -> int:
    Sum = 0
    m = len(mat)
    for i in range(m):
        Sum += mat[i][i]
    for i in range(m):
        Sum += mat[i][m-i-1]
    if m%2: Sum -= mat[m//2][m//2]
    return Sum