/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let m = s.length;
    let n = p.length;

    const isPossible = (i, j) => {
        if (i == m) {
            let k = j;
            while (k < n) {
                if (k + 1 < n && p[k + 1] == '*') {
                    k += 2;
                } else {
                    return false;
                }
            }
            return true;
        }

        if (j == n) {
            return false;
        }

        if (p[j] == '.') {
            if (j + 1 < n && p[j + 1] == '*') {
                return isPossible(i + 1, j) || isPossible(i, j + 2);
            } else {
                return isPossible(i + 1, j + 1);
            }
        } else if (p[j] != '*') {
            if (j + 1 < n && p[j + 1] == '*') {
                if (s[i] != p[j]) {
                    return isPossible(i, j + 2);
                } else {
                    return isPossible(i + 1, j) || isPossible(i, j + 2);
                }
            } else {
                if (s[i] == p[j]) {
                    return isPossible(i + 1, j + 1);
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    }

    return isPossible(0, 0);
};