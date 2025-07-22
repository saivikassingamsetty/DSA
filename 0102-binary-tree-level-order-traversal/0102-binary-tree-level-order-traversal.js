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
var levelOrder = function (root) {
    if (!root) return [];

    let queue = new Queue()
    queue.enqueue(root);
    let levels = [];
    let level = [];

    while (queue.size()) {
        level = [];
        let n = queue.size();
        for (let i = 0; i < n; i++) {
            let node = queue.dequeue();
            level.push(node.val);
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }
        levels.push(level);
    }

    return levels;
};