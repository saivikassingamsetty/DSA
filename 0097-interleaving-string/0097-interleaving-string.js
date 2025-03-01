/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
    const memo = new Map();

    const dfs = (i, j, k) => {
        let key = `${i},${j},${k}`;

        if (!memo.has(key)) {
            if (i >= s1.length && j >= s2.length) {
                return k == s3.length;
            }

            let prevI = i;
            let prevK = k;

            let val = false;

            while (i < s1.length && k < s3.length && s1[i] == s3[k]) {
                val |= dfs(++i, j, ++k);
            }

            while (j < s2.length && prevK < s3.length && s2[j] == s3[prevK]) {
                val |= dfs(prevI, ++j, ++prevK);
            }

            memo.set(key, val);
        }

        return memo.get(key);
    }

    return dfs(0, 0, 0);
};