"""
You are given n rectangles represented by a 0-indexed 2D integer array rectangles,
where rectangles[i] = [widthi, heighti] denotes the width and height of the ith rectangle.

Two rectangles i and j (i < j) are considered interchangeable if they have the same width-to-height ratio. 
More formally, two rectangles are interchangeable if widthi/heighti == widthj/heightj (using decimal division, not integer division).

Return the number of pairs of interchangeable rectangles in rectangles.
"""
def interchangeableRectangles(rectangles: list[list[int]]) -> int:
    #creating ratio list
    ratioList = [w/h for [w,h] in rectangles]
    count = {}
    res = 0
    #counting the similar values
    for i in ratioList:
        if i in count: count[i] += 1
        else: count[i] = 1
    for i in count.values():
        # (1+2+3..count-1) pairs per count
        res += (i*(i-1))//2
    return res