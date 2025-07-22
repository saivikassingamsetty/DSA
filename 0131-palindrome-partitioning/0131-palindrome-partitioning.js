/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [];
    let dp = Array.from({ length: s.length }, () => new Array(s.length).fill(false));

    const solve = (i, listSoFar) => {
        if (i == s.length) res.push([...listSoFar]);

        for (let j = i; j < s.length; j++) {
            if (s[i] == s[j] && (j - i <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                listSoFar.push(s.slice(i, j + 1));
                solve(j + 1, listSoFar);
                listSoFar.pop();
            };
        }
    }

    solve(0, []);
    return res;
};