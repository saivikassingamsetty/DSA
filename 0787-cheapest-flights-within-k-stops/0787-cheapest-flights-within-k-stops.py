class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        graph = defaultdict(list)
        for fro, to, price in flights:
            graph[fro].append((to, price))

        queue = deque()
        queue.append((src, 0))
        
        dist = [math.inf] * n
        dist[src] = 0

        stops = 0

        # level order BFS
        while queue and stops <= k:
            size = len(queue)

            # process all nodes
            for _ in range(size):
                node, cost = queue.popleft()
                for next, price in graph[node]:
                    if dist[next] > cost + price:
                        dist[next] = cost + price
                        queue.append((next, dist[next]))
            
            # increment stops
            stops += 1

        return dist[dst] if dist[dst] != math.inf else -1
