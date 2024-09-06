/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    //base case
    if (!nums.length) return;

    //get max items index
    let maxIndex = nums.indexOf(Math.max(...nums));

    //build left and right
    const leftMaxTree = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    const rightMaxTree = constructMaximumBinaryTree(nums.slice(maxIndex+1));

    //construct a max tree and return
    const node = new TreeNode(nums[maxIndex], leftMaxTree, rightMaxTree);
    // console.log(JSON.stringify(node));
    return node;
};