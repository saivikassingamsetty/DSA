const cache = new Map();

const findMaxMin = (node) => {
    if (!node) return [-Infinity, Infinity];
    if (!cache.has(node))
        cache.set(node, [Math.max(node.val, findMaxMin(node.left)[0], findMaxMin(node.right)[0]), Math.min(node.val, findMaxMin(node.left)[1], findMaxMin(node.right)[1])]);
    return cache.get(node);
}

var isValidBST = function (root) {
    if (!root) return true;

    [leftMax, _] = findMaxMin(root.left);
    [_, rightMin] = findMaxMin(root.right);

    return root.val > leftMax && root.val < rightMin && isValidBST(root.left) && isValidBST(root.right);
};