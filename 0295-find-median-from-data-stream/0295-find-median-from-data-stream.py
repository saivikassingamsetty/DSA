class MedianFinder:

    def __init__(self):
        self.minHeap = []
        self.maxHeap = []

    def addNum(self, num: int) -> None:
        # smaller than max in minheap
        if not self.minHeap or -self.minHeap[0] >= num:
            heapq.heappush(self.minHeap, -num)
        else:
            heapq.heappush(self.maxHeap, num)

        # balance
        if len(self.minHeap) - len(self.maxHeap) > 1:
            heapq.heappush(self.maxHeap, -heapq.heappop(self.minHeap))
        if len(self.maxHeap) - len(self.minHeap) > 1:
            heapq.heappush(self.minHeap, -heapq.heappop(self.maxHeap))

    def findMedian(self) -> float:
        if len(self.minHeap) > len(self.maxHeap):
            return -self.minHeap[0]
        elif len(self.minHeap) < len(self.maxHeap):
            return self.maxHeap[0]
        else:
            return (-self.minHeap[0] + self.maxHeap[0]) / 2


# Your MedianFinder object will be instantiated and called as such:
# obj = MedianFinder()
# obj.addNum(num)
# param_2 = obj.findMedian()