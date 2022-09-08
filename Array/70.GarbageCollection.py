from itertools import accumulate

def garbageCollection(A: list[str], travel: list[int]) -> int:
    # last = {c: i for i,pgm in enumerate(A) for c in pgm}
    # dis = list(accumulate(travel, initial = 0))
    # return sum(map(len, A)) + sum(dis[last.get(c, 0)] for c in 'PGM')
    
    #getting last index of each garbage
    last = {'M':0, 'P':0, 'G':0}
    for i, garbage in enumerate(A): #O(n**6)
        for g in garbage: 
            last[g] = i
    
    #prefix sum 
    dis = list(accumulate(travel, initial = 0))
    
    #find the total garbage 
    total_garbage = sum(map(len, A))
    
    #sum of travel time of each trucks
    travel_time = 0
    for g in 'PGM':
        travel_time += dis[last[g]]
    
    return total_garbage + travel_time