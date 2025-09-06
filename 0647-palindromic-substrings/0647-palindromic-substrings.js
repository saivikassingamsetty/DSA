/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    // brute force - all substrings and check for palindrome or not! - O(n3)
    // optimised using dp
    let n = s.length;
    const dp = Array.from({ length: n }, () => new Array(n).fill(false));
    let count = 0;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            // first condition covers cases like a and aa
            // second covers like aba a--something--a
            if (s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                count++;
            }
        }
    }

    return count;
};