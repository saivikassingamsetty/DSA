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
var distributeCoins = function(root) {
    let steps = 0;

    const distribute = (node) => {
        if (node == undefined) return 0;

        //does left subtree need it or have excess
        let left = distribute(node.left);

        //does right subtree need it or have excess
        let right = distribute(node.right);

        // updates steps accordingly
        steps += Math.abs(left) + Math.abs(right);

        //need or excess, send to parent
        return node.val + left + right - 1;
    }

    distribute(root);
    return steps;
};