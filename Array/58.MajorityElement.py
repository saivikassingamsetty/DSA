"""
Given an array A of N elements. Find the majority element in the array. 
A majority element in an array A of size N is an element that appears more than N/2 times in the array.

Moore Voting Algorithm
"""
def majorityElement(A, N):
    cnt = 0
    for i in A:
        if cnt == 0:
            winner = i
        if i == winner:
            cnt += 1
        else:
            cnt -= 1
    if A.count(winner) > N//2:
        return winner
    else:
        return -1