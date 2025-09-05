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

    let dict = { [target.val]: 0 };
    let res = [];
    let hasTargetCache = {};

    const hasTarget = (node) => {
        if (!node) return false;
        if(hasTargetCache[node.val]) return hasTargetCache[node.val];

        return hasTargetCache[node.val] = node == target || hasTarget(node.left) || hasTarget(node.right);
    }

    const dfs = (node) => {
        if (!node) return Infinity;

        // initialisation
        if (dict[node.val] === undefined) dict[node.val] = Infinity;
        if (node.left && dict[node.left.val] === undefined) dict[node.left.val] = Infinity;
        if (node.right && dict[node.right.val] === undefined) dict[node.right.val] = Infinity;

        // if target is in left, start with exploring left first else right
        if (hasTarget(node.left)) {
            // explore left and gather distance
            if (node.left) dict[node.left.val] = Math.min(dict[node.left.val], dict[node.val] + 1);
            left = dfs(node.left);

            // update distance from left
            dict[node.val] = Math.min(dict[node.val], left + 1);

            // explore right and gather distance
            if (node.right) dict[node.right.val] = Math.min(dict[node.right.val], dict[node.val] + 1);
            right = dfs(node.right);

            // update distance from right
            dict[node.val] = Math.min(dict[node.val], right + 1);
        } else {
            // explore right and gather distance
            if (node.right) dict[node.right.val] = Math.min(dict[node.right.val], dict[node.val] + 1);
            right = dfs(node.right);

            // update distance from right
            dict[node.val] = Math.min(dict[node.val], right + 1);

            // explore left and gather distance
            if (node.left) dict[node.left.val] = Math.min(dict[node.left.val], dict[node.val] + 1);
            left = dfs(node.left);

            // update distance from left
            dict[node.val] = Math.min(dict[node.val], left + 1);
        }

        // store value
        if (dict[node.val] == k) res.push(node.val);

        // return updated distance
        return dict[node.val];
    }

    dfs(root);

    return res;
};