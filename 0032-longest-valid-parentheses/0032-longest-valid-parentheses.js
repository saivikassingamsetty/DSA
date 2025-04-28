/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let stack = [];
    let res = new Array(s.length).fill(0);

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else {
            if (stack.length) {
                let j = stack.pop();
                res[j] = 1;
                res[i] = 1;
            }
        }
    }

    //longest consecutive 1 in 01 array
    let max = 0;
    let curr = 0;

    for (let i = 0; i < s.length; i++) {
        if (res[i]) {
            curr++;
        } else {
            max = Math.max(max, curr);
            curr = 0;
        }
    }

    return Math.max(max, curr);
};