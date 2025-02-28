/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
    let m = str1.length;
    let n = str2.length;
    // state: LCS of str1[i:] and str2[j:]
    let dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (str1[i] == str2[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
            }
        }
    }

    // create the supersequence by traversing the dp table from dp[0][0]
    let superSequence = '';
    let i = 0;
    let j = 0;
    while (i < m && j < n) {
        if (str1[i] == str2[j]) {
            // just traverse diagonally
            superSequence += str1[i];
            i++;
            j++;
        } else if (dp[i+1][j] >= dp[i][j+1]) {
            //if advancing in str1 makes us find LCS than advancing in str2
            superSequence += str1[i];
            i++;
        } else {
            superSequence += str2[j];
            j++;
        }
    }

    superSequence += str1.slice(i) + str2.slice(j);

    return superSequence;
};