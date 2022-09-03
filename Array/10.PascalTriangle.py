"""
Given an integer numRows, return the first numRows of Pascal's triangle.
"""
def generate(numRows: int) -> list[list[int]]:
    tri = [[1]]
    for i in range(1,numRows):
        temp = [1]
        for j in range(1, i):
            temp += [tri[-1][j-1] + tri[-1][j]]
        temp += [1]
        tri.append(temp)
    return tri