/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
    let count = 1;
    let res = '';

    const dfs = (str) => {
        if (res) return res;

        if (str.length == n && count == k) {
            res = str;
            return;
        }

        if (str.length == n && count < k) {
            count++;
            return;
        }

        for (let next of 'abc') {
            if (!res && str[str.length - 1] != next) dfs(str + next);
        }
    }

    dfs('');

    return res;
};