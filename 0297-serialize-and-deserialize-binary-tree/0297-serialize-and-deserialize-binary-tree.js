var serialize = function (root) {
    if (!root) return '';

    const preorder = [];

    const traversePreorder = (node) => {
        if (!node) {
            preorder.push("null");
            return;
        }
        preorder.push(node.val.toString());
        traversePreorder(node.left);
        traversePreorder(node.right);
    };

    traversePreorder(root);

    return preorder.join(' ');
};

var deserialize = function (data) {
    if (!data.trim()) return null;
    data = data.split(' ');

    function buildTree() {
        const val = data.shift();
        if (val === "null") return null;
        
        const node = new TreeNode(Number(val));
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }

    return buildTree();
};
