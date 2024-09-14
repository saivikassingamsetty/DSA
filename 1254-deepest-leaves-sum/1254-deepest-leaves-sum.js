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
var deepestLeavesSum = function(root) {
    let deep = 0;
    let res = 0;

    const findLeaves = (node,depth) => {
        if (node && !node.left && !node.right) {
            if (depth > deep) {
                res = node.val;
                deep = depth;
            } else if (depth === deep) {
                res += node.val;
            }

            return;
        }

        if (node.left) findLeaves(node.left, depth+1);
        if (node.right) findLeaves(node.right, depth+1);
    }

    findLeaves(root, 0);

    return res;
};