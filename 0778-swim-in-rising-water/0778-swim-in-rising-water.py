class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        heap = [(grid[0][0], 0, 0)]
        vis = set()

        while heap:
            time, i, j = heappop(heap)

            if i == m - 1 and j == n - 1:
                return time
            
            if (i,j) in vis:
                continue
            
            vis.add((i, j))

            for ni, nj in [(i - 1, j), (i + 1, j), (i, j - 1), (i, j + 1)]:
                if (0 <= ni < m and 0 <= nj < n):
                    newTime = max(time, grid[ni][nj])
                    heappush(heap, (newTime, ni, nj))
        
        return -1
