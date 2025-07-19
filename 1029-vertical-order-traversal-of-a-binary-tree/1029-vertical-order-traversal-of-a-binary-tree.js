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
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
    if (!root) return [];

    let nodes = [];

    const dfs = (row, col, node) => {
        if (!node) return;
        nodes.push([col, row, node.val]);

        dfs(row + 1, col - 1, node.left);
        dfs(row + 1, col + 1, node.right);
    }

    dfs(0, 0, root);

    nodes.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] != b[1] ? a[1] - b[1] : a[2] - b[2]);

    let res = [];
    let currCol = null;
    for (let [col, row, val] of nodes) {
        if (col != currCol) {
            res.push([]);
            currCol = col;
        }
        res[res.length - 1].push(val);
    }

    return res;
};