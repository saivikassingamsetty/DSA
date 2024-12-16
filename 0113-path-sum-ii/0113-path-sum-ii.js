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
 * @param {number} targetSum
 * @return {number[][]}
 */

//recursive + extra memory
var pathSum1 = function (root, targetSum) {
    let res = [];

    const findPathSum = (node, pathSoFar, sumBalanceRemained) => {
        if (!node) return;

        if (!node.left && !node.right) {
            if (sumBalanceRemained == node.val) {
                res.push([...pathSoFar, node.val]);
            }
            return;
        }

        findPathSum(node.left, [...pathSoFar, node.val], sumBalanceRemained - node.val);
        findPathSum(node.right, [...pathSoFar, node.val], sumBalanceRemained - node.val);
    }

    findPathSum(root, [], targetSum);

    return res;
};

//recursive without extra memory
var pathSum2 = function (root, targetSum) {
    const findPathSum = (node, sumBalanceRemained) => {
        if (!node) return [];

        if (!node.left && !node.right) {
            if (sumBalanceRemained == node.val) {
                return [[node.val]];
            }
            return [];
        }

        let left = findPathSum(node.left, sumBalanceRemained - node.val);
        let right = findPathSum(node.right, sumBalanceRemained - node.val);
        let vaildPaths = [...left, ...right];

        return vaildPaths.reduce((res, validPath) => {
            res.push([node.val, ...validPath]);
            return res;
        }, []);
    }

    return findPathSum(root, targetSum);
};

// BFS + Queue
var pathSum = function (root, targetSum) {
    if (!root) return [];

    let queue = [];
    let res = [];
    queue.push([root, targetSum, []]);

    while (queue.length) {
        let [node, sumRemained, pathSoFar] = queue.shift();

        if (!node.left && !node.right && sumRemained == node.val) {
            res.push([...pathSoFar, node.val]);
        }

        if (node.left)
            queue.push([node.left, sumRemained - node.val, [...pathSoFar, node.val]]);

        if (node.right)
            queue.push([node.right, sumRemained - node.val, [...pathSoFar, node.val]]);

    }

    return res;
}

// DFS + Stack
var pathSum4 = function (root, targetSum) {
    if (!root) return [];

    let stack = [];
    let res = [];
    stack.push([root, targetSum, []]);

    while (stack.length) {
        let [node, sumRemained, pathSoFar] = stack.pop();

        if (!node.left && !node.right && sumRemained == node.val) {
            res.push([...pathSoFar, node.val]);
        }

        if (node.left)
            stack.push([node.left, sumRemained - node.val, [...pathSoFar, node.val]]);

        if (node.right)
            stack.push([node.right, sumRemained - node.val, [...pathSoFar, node.val]]);

    }

    return res;
}