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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res = [];

    const findPath = (node, pathSoFar) => {
        if (!node) return;

        //leaf
        if(!node.left && !node.right) {
            res.push(pathSoFar + (pathSoFar != '' ? '->': '') + node.val);
            return;
        }

        findPath(node.left, pathSoFar + (pathSoFar != '' ? '->': '') + node.val);
        findPath(node.right, pathSoFar + (pathSoFar != '' ? '->': '') + node.val);
    }

    findPath(root, '');

    return res;
};