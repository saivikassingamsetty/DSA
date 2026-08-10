"""
You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with m rows and n columns using all the elements from original.

The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.

Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.
"""
def construct2DArray(original: list[int], m: int, n: int) -> list[list[int]]:
    if len(original) != m*n: return []
    newArr = [[0 for j in range(n)] for i in range(m)]
    i,j = 0,0
    for k in range(len(original)):
        newArr[i][j] = original[k]
        #placing next pointers
        if j == n-1:
            i += 1
            j = 0
        else:
            j += 1
    return newArr