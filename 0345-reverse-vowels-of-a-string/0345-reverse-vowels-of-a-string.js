/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowelList = [];
    for (let ch of s) {
        if ('AEIOUaeiou'.indexOf(ch) != -1) vowelList.push(ch);
    }

    let res = ''
    for (let ch of s) {
        if ('AEIOUaeiou'.indexOf(ch) != -1) {
            res += vowelList.pop();
        } else {
            res += ch;
        }
    }

    return res;
};