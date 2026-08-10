"""
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

if add and merge intervals - nlogn
use already sorted intervals - n
"""
def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:
    res = []
    n = newInterval
    for index,i in enumerate(intervals):
        #already done
        if i[1] < n[0]:
            res.append(i)
        #found interval after new 
        elif n[1] < i[0]:
            res.append(n)
            return res + intervals[index:]
        #overlapping 
        else:
            n[0] = min(i[0], n[0])
            n[1] = max(i[1], n[1])
    res.append(n)
    return res