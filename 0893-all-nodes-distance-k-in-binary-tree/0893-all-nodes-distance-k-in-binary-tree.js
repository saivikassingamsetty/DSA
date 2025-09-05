/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    if (!target) return [];
    let res = [];

    // Parent Pointers
    let parentMap = {};
    const populateParent = (node, parent) => {
        if (!node) return;
        parentMap[node.val] = parent;
        populateParent(node.left, node);
        populateParent(node.right, node);
    }

    populateParent(root, null);

    // BFS
    let queue = new Queue();
    queue.enqueue(target);
    let vis = new Set([target.val]);
    let level = 0;

    while (queue.size() && level <= k) {
        let size = queue.size();

        for (let i = 0; i < size; i++) {
            let node = queue.dequeue();
            if (level == k) res.push(node.val);

            for (let neighbor of [node.left, node.right, parentMap[node.val]]) {
                if (neighbor && !vis.has(neighbor.val)) {
                    vis.add(neighbor.val);
                    queue.enqueue(neighbor);
                }
            }
        }

        level++;
    }

    return res;
};