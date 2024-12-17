/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let dict = { '(': ')', '{': '}', '[': ']' };

    for (let ch of s) {
        //open
        if (ch in dict) {
            stack.push(ch);
        }
        //close
        else {
            if (ch != dict[stack.pop()]) return false;
        }
    }

    return stack.length == 0;
};