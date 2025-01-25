/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    let parents = new Map();
    let names = new Map();

    function find(node) {
        if (parents.get(node) !== node) {
            parents.set(node, find(parents.get(node)));
        }

        return parents.get(node);
    }

    function union(u, v, name) {
        const rootU = find(u);
        const rootV = find(v);

        if (rootU != rootV) {
            parents.set(rootU, rootV);
        }
    }

    for (let account of accounts) {
        let name = account[0];
        let firstEmail = account[1];

        for (let j = 1; j < account.length; j++) {
            let email = account[j];
            if (!parents.get(email)) {
                parents.set(email, email);
            }
            union(firstEmail, email);
            names.set(email, name);
        }
    }

    let emailsGroup = new Map();
    for (let email of parents.keys()) {
        const root = find(email);
        if (!emailsGroup.has(root)) {
            emailsGroup.set(root, new Set());
        }
        emailsGroup.set(root, emailsGroup.get(root).add(email));
    }

    let res = [];
    for (let [emailRoot, emails] of emailsGroup) {
        let name = names.get(emailRoot);
        let emailsCopy = [...emails].sort((a, b) => {
            if (a < b) return -1
            else return 1
        });

        res.push([name, ...emailsCopy]);
    }

    return res;
};