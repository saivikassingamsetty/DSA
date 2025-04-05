"""
Given an array of integers. Find the Inversion Count in the array. 

Inversion Count: For an array, inversion count indicates how far (or close) the array is from being sorted. 
If array is already sorted then the inversion count is 0. If an array is sorted in the reverse order then the inversion count is the maximum. 
Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
"""
class Solution:
    #User function Template for python3
    
    # arr[]: Input Array
    # N : Size of the Array arr[]
    #Function to count inversions in the array.
    count = 0
    def merge(self, a1, a2):
        m,n = len(a1), len(a2)
        i, j = 0, 0
        res = []
        while i < m and j < n:
            if a1[i] > a2[j]:
                res.append(a2[j])
                j += 1
                self.count += (m-i)
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
        
    def inversionCount(self, arr, n):
        count = [0]
        self.mergeSort(arr, n)
        return self.count