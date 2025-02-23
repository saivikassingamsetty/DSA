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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let indexMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }

    preorderIndex = 0;

    const constructTree = (leftIndex, rightIndex) => {
        if (leftIndex > rightIndex) return null;

        let val = preorder[preorderIndex++];
        let node = new TreeNode(val);

        node.left = constructTree(leftIndex, indexMap.get(val) - 1);
        node.right = constructTree(indexMap.get(val) + 1, rightIndex);

        return node;
    }

    return constructTree(0, inorder.length - 1);
};