"""
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.
"""
def merge(intervals: list[list[int]]) -> list[list[int]]:
    intervals.sort(key = lambda x: x[0])
    i = 1
    while i < len(intervals):
        if intervals[i][0] <= intervals[i-1][1]:
            intervals[i-1] = [intervals[i-1][0], max(intervals[i-1][1], intervals[i][1])]
            del intervals[i]
        else:
            i += 1
    return intervals