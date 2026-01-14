"""
Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. 
Merge them in sorted order without using any extra space. 
Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
"""
def merge(arr1,arr2,n,m):
    #backward selection
    arr1.extend(arr2)
    write = n+m-1
    while m >=1 :
        if n >= 1 and arr1[n-1] > arr2[m-1]:
            arr1[write] = arr1[n-1]
            n -= 1
        else:
            arr1[write] = arr2[m-1]
            m -= 1
        write -= 1
    a = len(arr1)
    b = len(arr2)
    for i in range(b):
        arr2[i] = arr1[i+a-b]
    del arr1[a-b:]

    # s =  sorted(nums1[:m]+nums2)
    # for i in range(m+n):
    #     nums1[i] = s[i]
    
    #Gap Sort or shell sort
    # gap = math.ceil((n+m)/2)
    # for i in range(n): 
    #     nums1[i+m] = nums2[i]
    # i = 0
    # while gap > 1:
    #     if i+gap < m+n and nums1[i] > nums1[i+gap]:
    #         nums1[i], nums1[i+gap] = nums1[i+gap], nums1[i]
    #         i += 1
    #     elif i+gap < m+n and nums1[i] <= nums1[i+gap]:
    #         i += 1
    #     else:
    #         gap = math.ceil(gap/2)
    #         i = 0
        