"""
Union of two arrays can be defined as the common and distinct elements in the two arrays.
Given two sorted arrays of size n and m respectively, find their union.
Expected Time Complexity: O(n+m).
Expected Auxiliary Space: O(n+m).
"""
def mergeArrays(a,b,n,m):
    '''
    :param a: given sorted array a
    :param n: size of sorted array a
    :param b: given sorted array b
    :param m: size of sorted array b
    :return:  The union of both arrays as a list
    '''
    first, second = 0,0
    union = []
    while first < n and second < m:
        if a[first] > b[second]:
            if union == [] or b[second] != union[-1]:
                union.append(b[second])
            second += 1
        else:
            if union == [] or a[first] != union[-1]:
                union.append(a[first])
            first += 1
    while first < n:
        if (union == [] or a[first] != union[-1]):
            union.append(a[first])
        first += 1
    while second < m:
        if (union == [] or b[second] != union[-1]):
            union.append(b[second])
        second += 1
    return union