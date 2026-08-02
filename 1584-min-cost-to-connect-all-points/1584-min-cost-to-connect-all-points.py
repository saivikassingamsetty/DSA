class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        # need to find MST
        graph = DefaultDict(list)

        for i in range(1, len(points)):
            for j in range(i):
                dist = abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])
                graph[tuple(points[i])].append([tuple(points[j]), dist])
                graph[tuple(points[j])].append([tuple(points[i]), dist])
            
        # Prims
        pq = []
        vis = defaultdict(bool)
        res = 0

        # start at a point
        heapq.heappush(pq, (0, tuple(points[0])))

        while pq:
            wt, v = heapq.heappop(pq)

            if vis[v]: continue
            
            # explore the node
            res += wt
            vis[v] = True

            for next in graph[v]:
                if not vis[next[0]]:
                    heapq.heappush(pq, (next[1], next[0]))
        
        return res
