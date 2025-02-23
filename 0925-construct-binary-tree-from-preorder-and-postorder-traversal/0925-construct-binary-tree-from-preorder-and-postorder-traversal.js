/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
    let indexMap = new Map();
    for (let i = 0; i < postorder.length; i++) {
        indexMap.set(postorder[i], i);
    }

    let preorderIndex = 0;

    const constructTree = (leftIndex, rightIndex) => {
        if (leftIndex > rightIndex) return null;

        let node = new TreeNode(preorder[preorderIndex++]);

        //if not the last node
        if (preorderIndex < preorder.length && leftIndex < rightIndex) {
            let leftId = indexMap.get(preorder[preorderIndex]);
            //divide based on the left subtree node
            node.left = constructTree(leftIndex, leftId);
            node.right = constructTree(leftId + 1, rightIndex - 1);
        }

        return node;
    }

    return constructTree(0, postorder.length - 1)
};