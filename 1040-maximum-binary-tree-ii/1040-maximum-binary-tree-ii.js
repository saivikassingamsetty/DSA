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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoMaxTree = function(root, val) {
    let parentNode = null;
    let ansRoot = root;

    while (root?.val > val) {
        //find the node which is less than our node
        parentNode = root;
        root = root.right;
    }

    //create a new node
    let newNode = new TreeNode(val);
    newNode.left = root;

    //if parent node is there, add the new to the right
    if (parentNode) {
        parentNode.right = newNode;
    } else { //this is the top node (max node)
        ansRoot = newNode;
    }

    return ansRoot;
};