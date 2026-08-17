class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        heap = [(grid[0][0], 0, 0)]
        vis = {(0, 0)}

        while heap:
            time, i, j = heappop(heap)

            if i == m - 1 and j == n - 1:
                return time

            for ni, nj in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
                if 0 <= ni < m and 0 <= nj < n and (ni, nj) not in vis:
                    heappush(heap, (max(time, grid[ni][nj]), ni, nj))  # tracking the max height in the path, and starts the relaxation, this is the actual cost of reaching the neighbour
                    vis.add((ni, nj))
        
        return -1
