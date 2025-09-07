/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    let currNum = 0;
    let currStr = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            currNum = 10 * currNum + Number(s[i]);
        } else if (s[i] == '[') {
            stack.push([currStr, currNum]);
            currStr = '';
            currNum = 0;
        } else if (s[i] == ']') {
            let [prevStr, num] = stack.pop();
            currStr = prevStr + currStr.repeat(num);
        } else {
            currStr += s[i];
        }
    }

    return currStr;
};