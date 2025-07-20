/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let res = [];
    let newRes = [];
    let map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

    for (let digit of digits) {
        newRes = [];
        for (let next of map[+digit]) {
            if (!res.length) newRes.push(next);
            for (let comb of res) newRes.push(comb + next);
        }
        res = newRes;
    }

    return res;
};