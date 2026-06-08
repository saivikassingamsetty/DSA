# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # check left or right or thats the LCA
        def solve(node):
            if not node: return None
            
            if node.val > p.val and node.val > q.val:
                return solve(node.left)
            elif node.val < p.val and node.val < q.val:
                return solve(node.right)
            
            return node

        return solve(root)