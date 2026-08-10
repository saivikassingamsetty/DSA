"""
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
"""
def getRow(rowIndex: int) -> list[int]:
    res = [1]
    for i in range(1,rowIndex+1):
        temp = [1]
        for j in range(1,i):
            temp += [res[j-1] + res[j]]
        temp += [1]
        res = temp
    return res