/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
    let n = arr.length;
    let indexMap = new Map();
    arr.forEach((item, index) => indexMap.set(item, index));

    const memo = Array.from({ length: n }, () => Array(n).fill(-1));

    const dfs = (i, j) => {
        if (memo[i][j] == -1) {
            let k = indexMap.get(arr[i] + arr[j]);
            memo[i][j] = k ? 1 + dfs(j, k) : 2;
        }

        return memo[i][j];
    }

    let maxLen = 2;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            maxLen = Math.max(maxLen, dfs(i, j));
        }
    }

    return maxLen > 2 ? maxLen : 0;
};