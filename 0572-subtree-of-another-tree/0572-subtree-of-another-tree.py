# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
        def hashTree(node):
            if not node: return hash(None)

            leftHash = hashTree(node.left)
            rightHash = hashTree(node.right)

            node.hashVal = hash((node.val, leftHash, rightHash))

            return node.hashVal        

        targetHash = hashTree(subRoot)

        def search(node):
            if not node: return False
            if node.hashVal == targetHash: return True
            
            return search(node.left) or search(node.right)
        
        hashTree(root)
        return search(root)