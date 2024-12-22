"""
Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i, j < nums.length
i != j
nums[i] - nums[j] == k
"""
def findPairs(nums: list[int], k: int) -> int:
    #counting similar values
    count = {}
    kDiffPairs = 0
    for i in nums:
        if i in count: count[i]+=1
        else: count[i] = 1
            
    if k == 0:
        #special case if k = 0 -> count pairs of equal numbers
        for i in count.keys():
            #only unique pairs so no combinations! just 1.
            if count[i]>1:
                kDiffPairs += 1
    else:
        #counting pairs with k-diff
        for i in count.keys():
            if i+k in count:
                #here also no combinations just add 1
                kDiffPairs += 1

    return kDiffPairs
        