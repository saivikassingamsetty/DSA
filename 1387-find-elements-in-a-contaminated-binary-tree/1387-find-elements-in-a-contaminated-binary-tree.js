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
 */
var FindElements = function (root) {
    this.set = new Set();

    const dfs = (node, x) => {
        if (!node) return;
        this.set.add(x);
        if (node.left) dfs(node.left, 2 * x + 1);
        if (node.right) dfs(node.right, 2 * x + 2);
    }

    dfs(root, 0);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.set.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */