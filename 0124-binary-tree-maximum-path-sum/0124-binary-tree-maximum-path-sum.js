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
var maxPathSum = function (root) {
    let res = -Infinity;

    const findMaxSum = (node) => {
        if (!node) return 0;

        let leftMaxSum = Math.max(findMaxSum(node.left), 0);
        let rightMaxSum = Math.max(findMaxSum(node.right), 0);
        let currMaxSum = leftMaxSum + rightMaxSum + node.val;

        //as passing through the root is not needed, we can track the subtree's max sum as well
        res = Math.max(res, currMaxSum)

        //but ultimately we need to choose or not choose one.
        return node.val + Math.max(leftMaxSum, rightMaxSum);
    }

    findMaxSum(root);

    return res;
};