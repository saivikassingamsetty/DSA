"""
Given an integer array nums, return the number of reverse pairs in the array.

A reverse pair is a pair (i, j) where 0 <= i < j < nums.length and nums[i] > 2 * nums[j].
"""
class Solution:
    count = 0
    def merge(self, a1, a2):
        m,n = len(a1), len(a2)
        #count
        j = 0
        for i in range(m):
            while j < n and a1[i] > 2*a2[j]:
                j += 1
            else:
                self.count += j
        
        #merge
        i, j = 0, 0
        res = []
        while i < m and j < n:
            if a1[i] > a2[j]:
                res.append(a2[j])
                j += 1
            else:
                res.append(a1[i])
                i += 1
        while i < m:
            res.append(a1[i])
            i += 1
        while j < n:
            res.append(a2[j])
            j += 1
        return res
                
    def mergeSort(self, arr, n):
        if n < 2:
            return arr
        mid = n//2
        arr1 = self.mergeSort(arr[:mid], mid)
        arr2 = self.mergeSort(arr[mid:], n-mid)
        return self.merge(arr1, arr2)
    def reversePairs(self, nums: list[int]) -> int:
        self.mergeSort(nums, len(nums))
        return self.count
        