"""
Given a square matrix of size N x N. The task is to rotate it by 90 degrees in anti-clockwise direction without using any extra space. 
"""
def rotateby90(a, n): 
    #transpose
    for i in range(n):
        for j in range(n-1,n-i-2,-1):
            a[i][j],a[n-1-j][n-1-i] = a[n-1-j][n-1-i], a[i][j]
    #rotation
    for i in range(n):
        for j in range(n//2):
            a[i][j],a[i][n-1-j] = a[i][n-1-j], a[i][j]