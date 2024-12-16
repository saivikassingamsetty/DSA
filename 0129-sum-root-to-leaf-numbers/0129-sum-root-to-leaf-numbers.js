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
var sumNumbers = function(root) {
    let res = 0;

    const findSum = (node, pathSoFar) => {
        if (!node) return [];

        if (!node.left && !node.right) {
            res += Number([...pathSoFar, node.val].join(''));
            return [node.val];
        };

        findSum(node.left, [...pathSoFar, node.val]);
        findSum(node.right, [...pathSoFar, node.val]);
    } 

    findSum(root, []);

    return res;
};