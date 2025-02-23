var serialize = function (root) {
    if (!root) return '';

    const postOrder = [];

    const traverse = (node) => {
        if (!node) {
            postOrder.push("null");
            return;
        }
        traverse(node.left);
        traverse(node.right);
        postOrder.push(node.val.toString());
    };

    traverse(root);

    return postOrder.join(' ');
};

var deserialize = function (data) {
    if (!data.trim()) return null;
    data = data.split(' ');

    function buildTree() {
        const val = data.pop();
        if (val === "null") return null;

        const node = new TreeNode(Number(val));
        node.right = buildTree();
        node.left = buildTree();
        return node;
    }

    return buildTree();
};
