/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    let m = s.length;
    let n = p.length;
    let memo = {};

    const isPossible = (i, j) => {
        let key = `${i},${j}`;
        
        if (key in memo) {
            return memo[key];
        }

        if (i == m) {
            let k = j;
            while (k < n) {
                if (k + 1 < n && p[k + 1] == '*') {
                    k += 2;
                } else {
                    return memo[key] = false;
                }
            }
            return memo[key] = true;
        }

        if (j == n) {
            return memo[key] = false;
        }

        if (p[j] == '.') {
            if (j + 1 < n && p[j + 1] == '*') {
                return memo[key] = isPossible(i + 1, j) || isPossible(i, j + 2);
            } else {
                return memo[key] = isPossible(i + 1, j + 1);
            }
        } else if (p[j] != '*') {
            if (j + 1 < n && p[j + 1] == '*') {
                if (s[i] != p[j]) {
                    return memo[key] = isPossible(i, j + 2);
                } else {
                    return memo[key] = isPossible(i + 1, j) || isPossible(i, j + 2);
                }
            } else {
                if (s[i] == p[j]) {
                    return memo[key] = isPossible(i + 1, j + 1);
                } else {
                    return memo[key] = false;
                }
            }
        } else {
            return memo[key] = false;
        }
    }

    return isPossible(0, 0);
};
