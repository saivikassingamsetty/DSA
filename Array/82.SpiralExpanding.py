"""
You start at the cell (rStart, cStart) of an rows x cols grid facing east. The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.

You will walk in a clockwise spiral shape to visit every position in this grid. Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.). Eventually, we reach all rows * cols spaces of the grid.

Return an array of coordinates representing the positions of the grid in the order you visited them.
"""
def spiralMatrixIII(rows: int, cols: int, rStart: int, cStart: int) -> list[list[int]]:
    def valid(r,c):
        return 0<=r<rows and 0<=c<cols
    r,c = rStart, cStart
    res = [(rStart, cStart)]
    steps = 1
    while len(res) < rows*cols:
        for i in range(steps):
            r,c = r,c+1
            if valid(r,c): res.append((r,c))
        for j in range(steps):
            r,c = r+1,c
            if valid(r,c): res.append((r,c))
        #expanding
        steps += 1
        for i in range(steps):
            r,c = r,c-1
            if valid(r,c): res.append((r,c))
        for j in range(steps):
            r,c = r-1,c
            if valid(r,c): res.append((r,c))
        steps+= 1
    return res