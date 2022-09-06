"""
Given an array A of positive integers. Your task is to find the leaders in the array. 
An element of array is leader if it is greater than or equal to all the elements to its right side. 
The rightmost element is always a leader. 
"""
def leaders(A, N):
    maxRight = A[-1]
    leaders = [A[-1]]
    for i in range(N-2,-1,-1):
        if A[i] >= maxRight:
            leaders.append(A[i])
            maxRight = A[i]
    return leaders[::-1]