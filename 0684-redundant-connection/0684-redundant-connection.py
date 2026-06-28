class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        n = len(edges)
        parent = [i for i in range(n+1)]
        rank = [1] * (n+1)
        redundant = [-1, -1]

        def union(x, y):
            px = find(x)
            py = find(y)

            if px != py:
                if rank[px] >= rank[py]:
                    parent[py] = px
                    rank[px] += 1
                else:
                    parent[px] = py
                    rank[py] += 1
            else:
                # storing redundant
                redundant[0] = x
                redundant[1] = y
                rank[px] += 1

        def find(x):
            if x != parent[x]:
                return find(parent[x])
            return x
        
        for u,v in edges: union(u, v)

        return redundant
