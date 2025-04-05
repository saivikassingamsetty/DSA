"""
Given an array of size N. The task is to rotate array by D elements where D ≤ N.
"""
def leftRotate(arr, n, d):
    #reversal algorithm
    #reverse first d
    for i in range(d//2):
        arr[i], arr[d-i-1] = arr[d-i-1], arr[i]
    #reverse last n-k
    for i in range(d, (d+n)//2):
        arr[i], arr[n-i+d-1] = arr[n-i+d-1], arr[i]
    #reverse whole array
    for i in range(n//2):
        arr[i], arr[n-i-1] = arr[n-i-1], arr[i]