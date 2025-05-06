"""
Given an unsorted array Arr of size N of positive integers. 
One number 'A' from set {1, 2, …N} is missing and one number 'B' occurs twice in array. 
Find these two numbers.
"""
def findTwoElement(arr, n): 
    #finding Xor
    Xor = 0
    for i in range(n):
        Xor ^= arr[i]
        Xor ^= (i+1)
        
    #finding right most 1
    bit = Xor & (-Xor)
    
    #seperation
    b1, b2 = 0, 0
    for i in arr:
        if bit & i == 0:
            b1 ^= i
        else:
            b2 ^= i
    for i in range(1,n+1):
        if bit & i == 0:
            b1 ^= i
        else:
            b2 ^= i
    if b1 in arr:
        return b1, b2
    else:
        return b2, b1