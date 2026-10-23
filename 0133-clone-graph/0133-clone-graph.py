"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        # dictionary storing the value to node map!
        vis = {}

        def dfs(root):
            if not root: return None
            if root.val in vis: return vis[root.val]

            vis[root.val] = Node(root.val)

            for next in root.neighbors:
                vis[root.val].neighbors.append(dfs(next))

            return vis[root.val]

        return dfs(node)
