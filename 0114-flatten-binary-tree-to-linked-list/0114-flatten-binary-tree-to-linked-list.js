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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root) return null;

    let temp = root;
    let flattenedLeft = flatten(root.left);
    let flattenedRight = flatten(root.right);

    temp.left = null;
    temp.right = flattenedLeft;
    while (temp && temp.right) temp = temp.right;
    temp.right = flattenedRight;

    return root;
};