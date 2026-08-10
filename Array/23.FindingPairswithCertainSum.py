"""
You are given two integer arrays nums1 and nums2. You are tasked to implement a data structure that supports queries of two types:

Add a positive integer to an element of a given index in the array nums2.
Count the number of pairs (i, j) such that nums1[i] + nums2[j] equals a given value (0 <= i < nums1.length and 0 <= j < nums2.length).
Implement the FindSumPairs class:

FindSumPairs(int[] nums1, int[] nums2) Initializes the FindSumPairs object with two integer arrays nums1 and nums2.
void add(int index, int val) Adds val to nums2[index], i.e., apply nums2[index] += val.
int count(int tot) Returns the number of pairs (i, j) such that nums1[i] + nums2[j] == tot.
"""
class FindSumPairs:

    def __init__(self, nums1: list[int], nums2: list[int]):
        self.nums1 = nums1
        self.nums2 = nums2
        self.__count = {}
        for i in nums2:
            if i in self.__count: self.__count[i] += 1
            else: self.__count[i] = 1
        
        
    def add(self, index: int, val: int) -> None:
        self.__count[self.nums2[index]] -= 1
        self.nums2[index] += val
        if self.nums2[index] in self.__count: self.__count[self.nums2[index]] += 1
        else: self.__count[self.nums2[index]] = 1

    def count(self, tot: int) -> int:
        numPairs = 0
        for i in self.nums1:
            if tot-i in self.__count:
                numPairs += self.__count[tot-i]
        return numPairs
        


# Your FindSumPairs object will be instantiated and called as such:
# obj = FindSumPairs(nums1, nums2)
# obj.add(index,val)
# param_2 = obj.count(tot)