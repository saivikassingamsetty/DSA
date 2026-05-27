class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # Counter
        # counter = collections.Counter(nums)
        # return sorted(counter.keys(), key = lambda x: counter[x], reverse = True)[:k]

        # Heap
        # counter = collections.Counter(nums)
        # heap = []
        # for num, freq in counter.items():
        #     heapq.heappush(heap, (freq, num))
        #     if len(heap) > k:
        #         heapq.heappop(heap)

        # return [num for freq, num in heap]

        # o(N) Bucket sort
        #  main idea - greatest freq is just max N
        counter = collections.Counter(nums)
        buckets = [[] for _ in range(len(nums)+1)]
        
        for num, freq in counter.items():
            buckets[freq].append(num)
        
        res = []
        for i in range(len(buckets) - 1, -1, -1):
            while len(buckets[i]) and k:
                res.append(buckets[i].pop())
                k -= 1
        
        return res

