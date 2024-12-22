"""
Implement the next permutation, which rearranges the list of numbers into Lexicographically next greater permutation of list of numbers. 
If such arrangement is not possible, it must be rearranged to the lowest possible order i.e. 
sorted in an ascending order. You are given an list of numbers arr[ ] of size N.
"""
def nextPermutation(N, arr):
    first = -1
    for i in range(N-2, -1, -1):
        if arr[i] < arr[i+1]:
            first = i
            break
    if first == -1: return arr[::-1]
    for i in range(N-1,first,-1):
        if arr[i] > arr[first]:
            second = i
            break
    arr[first], arr[second] = arr[second], arr[first]
    return arr[:first+1] + arr[first+1:][::-1]