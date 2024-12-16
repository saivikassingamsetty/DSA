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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let res = [];

    const findPathSum = (node, pathSoFar, sumBalanceRemained) => {
        if (!node) return;

        if (!node.left && !node.right) {
            if (sumBalanceRemained == node.val) {
                res.push([...pathSoFar, node.val]);
            }
            return;
        }

        findPathSum(node.left, [...pathSoFar, node.val], sumBalanceRemained - node.val);
        findPathSum(node.right, [...pathSoFar, node.val], sumBalanceRemained - node.val);
    }

    findPathSum(root, [], targetSum);

    return res;
};