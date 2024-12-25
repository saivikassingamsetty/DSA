/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    let vowelList = [];
    for (let ch of s) {
        if ('AEIOUaeiou'.indexOf(ch) != -1) vowelList.push(ch);
    }
    vowelList.sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0));

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