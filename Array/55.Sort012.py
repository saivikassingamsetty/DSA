"""
Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
"""
def sort012Inplace(arr,n):
    i,m,j = 0,0,n-1
    while m <= j:
        if arr[m] == 2:
            arr[m],arr[j] = arr[j],arr[m]
            j -= 1
        elif arr[m] == 0:
            arr[i],arr[m] = arr[m],arr[i]
            i += 1
            m += 1
        else:
            m += 1