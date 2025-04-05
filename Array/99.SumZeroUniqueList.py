"""
Given an integer n, return any array containing n unique integers such that they add up to 0.
"""
def sumZero(n: int) -> list[int]:
    res = []
    i = 1
    cnt = 0
    while cnt < n:
        if cnt == n-1:
            res.append(0)
            cnt += 1
            break
        res.append(i)
        res.append(-i)
        i += 1
        cnt += 2
    return res