/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = new Set();

    const dfs = (str, openCount) => {
        if (str.length == 2 * n) {
            if (!openCount) res.add(str);
            return;
        }

        if (openCount < n) dfs(str + '(', openCount + 1);
        if (openCount > 0) dfs(str + ')', openCount - 1);
    }

    dfs('', 0);

    return [...res];
};