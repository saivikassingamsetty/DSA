/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null;

    //first node in preorder will be thr root
    let node = new TreeNode(preorder[0]);

    //find index in inorder
    let id = inorder.indexOf(preorder[0]);

    //recursively build left and right
    node.left = buildTree(preorder.slice(1, 1 + id), inorder.slice(0, id));
    node.right = buildTree(preorder.slice(id + 1), inorder.slice(id + 1));

    return node;
};