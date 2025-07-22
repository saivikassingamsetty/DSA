/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
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
            for (let child of node.children) {
                if (child) queue.enqueue(child);
            }
        }
        levels.push(level);
    }

    return levels;
};