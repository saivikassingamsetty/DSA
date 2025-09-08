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
var maxSumBST = function (root) {
    // recursion state - (sum, maxElement, minElement, isBST)
    let sum = 0;

    const solve = (node) => {
        // base case
        if (!node) return [0, -Infinity, Infinity, true];

        let [sumL, maxElementL, minElementL, isBSTL] = solve(node.left);
        let [sumR, maxElementR, minElementR, isBSTR] = solve(node.right);
        let currSum = node.val + sumL + sumR;
        let isBST = isBSTL && isBSTR && node.val > maxElementL && node.val < minElementR;

        // if valid BST
        if (isBST) sum = Math.max(sum, currSum);

        return [currSum, Math.max(maxElementL, maxElementR, node.val), Math.min(minElementL, minElementR, node.val), isBST];
    }

    solve(root);

    return sum;
};