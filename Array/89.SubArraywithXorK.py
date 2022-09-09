"""
Given an array arr of N integers and an integer K, find the number of subsets of arr having XOR of elements as K.
"""
def subsetXOR(arr, N, K): 
    #find number of subarrays with xor k
    prefXor = 1
    dic = {}
    res = 0
    for i in range(N):
        prefXor ^= arr[i]
        if prefXor^K in dic:
            res += dic[prefXor^K]
        dic[prefXor] = dic.get(prefXor, 0) + 1
    return res