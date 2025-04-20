/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    const memo = Array.from({ length: s1.length + 1 }, () => new Array(s2.length + 1).fill(undefined));

    const dfs = (i, j) => {
        if (memo[i][j] == undefined) {
            if (i >= s1.length && j >= s2.length && i + j >= s3.length) {
                return true;
            }

            if (i + j >= s3.length) return false;

            memo[i][j] = (s1[i] == s3[i + j] && dfs(i + 1, j)) || (s2[j] == s3[i + j] && dfs(i, j + 1));
        }

        return memo[i][j]
    }

    return dfs(0, 0);
};