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
var zigzagLevelOrder = function (root) {
    if (!root) return [];

    let dfs = (node) => {
        if (!node) return 0;

        return 1 + Math.max(dfs(node.left), dfs(node.right));
    }

    let length = dfs(root);
    const res = Array.from({ length }, () => []);

    let queue = new Queue();
    queue.enqueue([root, 0]);

    while (queue.size()) {
        let [node, level] = queue.dequeue();
        res[level].push(node.val);

        if (node.left) queue.enqueue([node.left, level + 1]);
        if (node.right) queue.enqueue([node.right, level + 1]);
    }

    return res.map((i, id) => id % 2 ? i.reverse() : i);
};