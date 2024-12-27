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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
    if (!root) return null;

    let stack = [root];
    let parent = new Map();

    while (stack.length) {
        //get the top node (without actually popping it, we will pop it later to make post order traversal)
        const node = stack[stack.length-1];

        //check if there is an unexplored left node
        if (node.left && !parent.has(node.left)) {
            stack.push(node.left);
            parent.set(node.left, node);
            //to actually go in deep
            continue;
        }

        //check if there is an unexplored right node
        if (node.right && !parent.has(node.right)) {
            stack.push(node.right);
            parent.set(node.right, node);
            //to actually go in deep
            continue;
        }

        //now pop it, post order traversal
        stack.pop();

        //check if that's the node which needs to be removed
        if (!node.left && !node.right && node.val == target) {
            let parentNode = parent.get(node);
            if (parentNode) {
                if (parentNode.left == node) parentNode.left = null;
                if (parentNode.right == node) parentNode.right = null;
            } else {
                return null;
            }
        }
    }

    return root;
};