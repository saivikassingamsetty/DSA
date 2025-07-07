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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
    if (!root) return new TreeNode(val);

    let node = root;
    while (node.left || node.right) {
        if (node.val < val) {
            if (node.right) {
                node = node.right
            } else {
                node.right = new TreeNode(val);
                return root;
            }
        } else {
            if (node.left) {
                node = node.left
            } else {
                node.left = new TreeNode(val);
                return root;
            }
        }
    }

    if (node.val > val) {
        node.left = new TreeNode(val);
    } else {
        node.right = new TreeNode(val);
    }

    return root;
};