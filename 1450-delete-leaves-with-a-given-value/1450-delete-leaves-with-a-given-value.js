/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    if (!root) return root;

    //recursively remove left and right
    if (root.left) root.left = removeLeafNodes(root.left, target);
    if (root.right) root.right = removeLeafNodes(root.right, target);

    //after modifying the left and right, check if its leaf and remove it
    if (root && !root.left && !root.right && root.val == target) return null;

    return root;
};