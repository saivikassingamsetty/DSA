/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    let res = '';
    let shiftValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        shiftValue = (shiftValue + shifts[i]) % 26;
        let newChar = s[i].charCodeAt(0) + shiftValue;

        newChar = (newChar - 97) % 26 + 97;

        res = String.fromCharCode(newChar) + res;
    }

    return res;
};