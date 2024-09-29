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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let res = 0;

    function sum(node, d) {
        if (node && !node.left && !node.right && d == 0) res += node.val;

        if (node.left) sum(node.left, 0);
        if (node.right) sum(node.right, 1);
    }

    sum(root, 1);

    return res;
};