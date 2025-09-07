/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let lastBoxedStringFreq = 0;
    let lastBoxedString = '';
    let isBracketOpenCount = 0;
    let res = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            if (isBracketOpenCount) {
                lastBoxedString += s[i];
            } else {
                lastBoxedStringFreq += s[i];
            }
        } else if (s[i] >= 'a' && s[i] <= 'z') {
            if (isBracketOpenCount) {
                lastBoxedString += s[i];
            } else {
                res += s[i];
            }
        } else if (s[i] == ']') {
            isBracketOpenCount--;
            // if valid
            if (!isBracketOpenCount) {
                res += decodeString(lastBoxedString.slice(1)).repeat(+lastBoxedStringFreq);
                lastBoxedStringFreq = 0;
                lastBoxedString = '';
            } else {
                lastBoxedString += s[i];
            }
        } else {
            isBracketOpenCount++;
            lastBoxedString += s[i];
        }
    }

    return res;
};