/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let start = 0;
    let maxLength = 1;
    let n = s.length;

    //considering singles a starting palindrome
    for (let i = 1; i < s.length; i++) {
        //expand both sides
        let j = 1;
        //if expanded characters are same, valid palindrome
        //odd length palindromes
        while (i - j >= 0 && i + j < n && s[i - j] == s[i + j]) {
            if (1 + j * 2 > maxLength) {
                maxLength = 1 + j * 2;
                start = i - j;
            }
            j++;
        }
    }

    //considering double as a starting palindrome
    //even length palindromes
    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            if (maxLength < 2) {
                maxLength = 2;
                start = i - 1;
            }

            //expand both sides
            let j = 1;
            //if expanded characters are same, valid palindrome
            while (i - 1 - j >= 0 && i + j < n && s[i - 1 - j] == s[i + j]) {
                if (2 + j * 2 > maxLength) {
                    maxLength = 2 + j * 2;
                    start = i - 1 - j;
                }
                j++;
            }
        }
    }

    return s.substr(start, maxLength);
};