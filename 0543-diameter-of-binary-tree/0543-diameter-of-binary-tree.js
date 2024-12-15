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
var diameterOfBinaryTree = function(root) {
    let res = 0;

    const depth = (node) => {
        if(!node) return 0;

        //depths
        let left = depth(node.left);
        let right = depth(node.right);

        //update res if longer diameter found
        res = Math.max(res, right + left);

        //returns depth
        return 1 + Math.max(left, right);
    }

    depth(root);
    return res;
};