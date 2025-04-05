"""
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

"""
def majorityElement(nums: list[int]) -> list[int]:
    maj1 = maj2 = 0
    winner1 = winner2 = ''
    n = len(nums)
    for num in nums:
        if num == winner1:
            maj1 += 1
        elif num == winner2:
            maj2 += 1
        elif maj1 == 0:
            winner1 = num
            maj1 = 1
        elif maj2 == 0:
            winner2 = num
            maj2 =1 
        else:
            maj1 -= 1
            maj2 -= 1
    winners = []
    if nums.count(winner1) > n//3: winners.append(winner1)
    if nums.count(winner2) > n//3: winners.append(winner2)
    return winners