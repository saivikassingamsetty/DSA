"""
"""
def missingNumber(A, N):
    #addition
    return N*(N+1)//2 - sum(A)
    #multiplication
    # return fact(N)/productofA