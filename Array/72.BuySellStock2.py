"""
The cost of stock on each day is given in an array A[] of size N. 
Find all the days on which you buy and sell the stock so that in between those days your profit is maximum.

Note: Output format is as follows - (buy_day sell_day) (buy_day sell_day)
For each input, the output should be in a single line.
"""
def stockBuySell(price, n):
    res = []
    minm = 0
    for i in range(n-1):
        if price[i] > price[i+1]:
            if minm < i:
                res.append((minm, i))
            minm = i + 1
    if minm < i+1:
        res.append((minm, i+1))
    if not res:
        print("No Profit")
    else:
        for i,j in res:
            print("({} {})".format(i,j), end = " ")
        print()