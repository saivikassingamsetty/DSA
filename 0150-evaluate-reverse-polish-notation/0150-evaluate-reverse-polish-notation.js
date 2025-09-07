/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            let a = stack.pop();
            let b = stack.pop();
            let c;
            if (token == '+') c = a + b
            else if (token == '-') c = b - a
            else if (token == '*') c = a * b
            else c = b / a > 0 ? Math.floor(b / a) : Math.ceil(b / a);
            stack.push(c);
        }
    }

    return stack[0];
};