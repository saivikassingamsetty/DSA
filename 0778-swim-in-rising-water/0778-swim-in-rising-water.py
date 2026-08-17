class Solution:
    def swimInWater(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        def canSwim(time) -> bool:
            queue = deque()
            queue.append((0, 0))
            vis = set()
            vis.add((0, 0))

            while queue:
                i, j = queue.popleft()

                if i == m - 1 and j == n - 1:
                    return True

                for di, dj in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                    if (
                        i + di < m
                        and i + di >= 0
                        and j + dj < n
                        and j + dj >= 0
                        and (i + di, j + dj) not in vis
                        and max(grid[i][j], time) == max(time, grid[i + di][j + dj])
                    ):
                        queue.append((i + di, j + dj))
                        vis.add((i + di, j + dj))

            return False

        l = min([min(row) for row in grid])
        r = max([max(row) for row in grid])

        while l < r:
            mid = (l + r) // 2
            if canSwim(mid):
                r = mid
            else:
                l = mid + 1

        return l
