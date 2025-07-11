var isEvenOddTree = function (root) {
    let queue = [[root, 0]];
    let levels = {};

    while (queue.length) {
        let [node, level] = queue.shift();

        if (level % 2 === 0) {
            if (node.val % 2 === 0) return false;
        } else {
            if (node.val % 2 === 1) return false;
        }

        if (levels[level] !== undefined) {
            if (level % 2 === 0) {
                if (levels[level] >= node.val) return false;
            } else {
                if (levels[level] <= node.val) return false;
            }
        }

        levels[level] = node.val;

        if (node.left) queue.push([node.left, level + 1]);
        if (node.right) queue.push([node.right, level + 1]);
    }
    return true;
};
