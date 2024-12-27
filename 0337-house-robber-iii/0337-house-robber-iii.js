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
var rob = function (root) {
    const dfs = (node) => {
        if (!node) return [0, 0];

        const [leftExcludeMax, leftIncludeMax] = dfs(node.left);
        const [rightExcludeMax, rightIncludeMax] = dfs(node.right);

        //if we include, we don't have any option to do with child included sum
        let maxSumIfCurrentNodeIsIncluded = node.val + leftExcludeMax + rightExcludeMax;

        //if we exclude current node, we can find largest sum in best options
        let maxSumIfCurrentNodeIsExcluded = Math.max(leftExcludeMax, leftIncludeMax) + Math.max(rightExcludeMax, rightIncludeMax);

        return [maxSumIfCurrentNodeIsExcluded, maxSumIfCurrentNodeIsIncluded];
    }
    
    return Math.max(...dfs(root));
};