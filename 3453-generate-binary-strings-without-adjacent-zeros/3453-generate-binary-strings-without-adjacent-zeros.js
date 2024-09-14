/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
    let res = [];

    const findString = s => {
        if (s.length === n) {
            res.push(s);
            return;
        }

        if (s.length === 0 || s[s.length - 1] === '1') findString(s + '0');
        findString(s + '1');
    }

    findString('');

    return res;
};