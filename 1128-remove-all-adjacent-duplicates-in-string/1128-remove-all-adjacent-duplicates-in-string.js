/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let stack = [];
    let stackLength = 0;

    for (let ch of s) {
        if (stackLength && ch == stack[stackLength-1]) {
            stack.pop();
            stackLength--;
        } else {
            stack.push(ch);
            stackLength++;
        }
    }

    return stack.join('')
};