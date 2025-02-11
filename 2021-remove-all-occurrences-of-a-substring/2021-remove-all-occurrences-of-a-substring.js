/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        if (stack.length >= part.length) {
            if (stack.slice(-part.length).join('') == part) stack.splice(stack.length - part.length, part.length);
        }
    }

    return stack.join('');
};