/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    let children = new Set(descriptions.map(([p, c, l]) => c));

    let rootValue = descriptions.find(([p, c, l]) => {
        if (!children.has(p)) return p;
    })[0];

    const root = new TreeNode(rootValue);

    //way-1: creating a tree
    // const queue = [root];
    // while (queue.length) {
    //     const parent = queue.shift();
    //     for (let [p, c, l] of descriptions) {
    //         if (p == parent.val) {
    //             const node = new TreeNode(c);

    //             if (l) parent.left = node;
    //             else parent.right = node;

    //             queue.push(node);
    //         }
    //     }
    // }

    //way-2: using Hashmap
    const adjacencyList = {};
    for (let [parent, child, left] of descriptions) {
        if (!(parent in adjacencyList)) {
            adjacencyList[parent] = [undefined, undefined];
        }

        if (left) adjacencyList[parent][0] = child;
        else adjacencyList[parent][1] = child;
    }

    const queue = [root];
    let l, r;

    while (queue.length) {
        const parent = queue.shift();
        if (parent.val in adjacencyList) {
            [l, r] = adjacencyList[parent.val];
            if (l) {
                parent.left = new TreeNode(l);
                queue.push(parent.left);
            }
            if (r) {
                parent.right = new TreeNode(r);
                queue.push(parent.right);
            }
            
        }
    }

    return root;
};