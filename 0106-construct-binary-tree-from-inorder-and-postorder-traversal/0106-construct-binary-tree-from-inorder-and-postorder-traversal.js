/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    let indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }

    let postOrderIndex = postorder.length - 1;

    const constructTree = (leftId, rightId) => {
        if (leftId > rightId) return null;

        let val = postorder[postOrderIndex--];
        let node = new TreeNode(val);

        node.right = constructTree(indexMap.get(val) + 1, rightId);
        node.left = constructTree(leftId, indexMap.get(val) - 1);
        
        return node;
    }

    return constructTree(0, inorder.length - 1);
};