/**
 * @param {string} target
 * @return {string[]}
 */
var stringSequence = function (target) {
    let res = [];

    const dfs = (str, pos) => {
        if (pos >= target.length) return;

        let targetCharCode = target[pos].charCodeAt(0) - 97;
        let i = 0;
        for (i = 0; i <= targetCharCode; i++) {
            res.push(str + String.fromCharCode(i + 97));
        }

        dfs(str + target[pos], pos + 1);
    }

    dfs('', 0, []);

    return res;
};