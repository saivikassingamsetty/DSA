/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
    let nodes = [];

    let d = 1;
    let v = '';

    for (let j = 0; j < traversal.length; j++) {
        if (traversal[j] == '-') {
            //add value so far
            if (traversal[j - 1] != '-') {
                nodes.push([Number(v), d]);
                v = '';
                d = 1;
            } else {
                //finds depth
                d++;
            }
        } else {
            //finds value
            v += traversal[j];
        }
    }

    nodes.push([Number(v), d]);

    let rootVal = nodes.shift()[0];
    let root = new TreeNode(rootVal);
    let pos = 0;

    const dfs = (node, level) => {
        if (pos >= nodes.length) return node;

        if (nodes[pos][1] == level + 1) {
            let n = new TreeNode(nodes[pos][0]);
            pos++;
            node.left = dfs(n, level + 1);
        }

        if (pos >= nodes.length) return node;

        if (nodes[pos][1] == level + 1) {
            let n = new TreeNode(nodes[pos][0]);
            pos++;
            node.right = dfs(n, level + 1);
        }

        return node;
    }

    return dfs(root, 0);
};