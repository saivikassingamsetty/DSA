/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let bal = { '(': 1, ')': -1, '': 0 };
    let memo = new Map();

    const solve = (index, balance) => {
        // base
        if (index == s.length) return balance == 0;
        if (balance < 0) return false;

        if (memo.has(`${index},${balance}`)) return memo.get(`${index},${balance}`);

        let isPossible = false;

        // recursive
        if (s[index] == '*') {
            for (let next of ['(', ')', '']) {
                isPossible |= solve(index + 1, balance + bal[next]);
            }
        } else {
            isPossible |= solve(index + 1, balance + bal[s[index]]);
        }

        memo.set(`${index},${balance}`, isPossible);
        return memo.get(`${index},${balance}`);
    }

    return solve(0, 0);
};