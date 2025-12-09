"""
Given a zero-based permutation nums (0-indexed), 
build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).
"""
def buildArray(nums: list[int]) -> list[int]:
    #Encryption-Decryption
    q = len(nums)
    for i in range(len(nums)):
        b = nums[i]
        r = nums[nums[i]] % q #access old element at val by modulo
        nums[i] = q*r+b
    #access new element at val by floor division.
    return list(map(lambda x: x//q, nums))