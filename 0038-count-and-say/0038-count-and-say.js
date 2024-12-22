/**
 * @param {number} n
 * @return {string}
 */

function RLE (string) {
    let res = '';
    let i = 0;

    while(i < string.length) {
        let groupLength = 0;

        while(i+groupLength < string.length && string[i] == string[i+groupLength]) {
            groupLength++;
        }

        res += groupLength + string[i];
        i += groupLength;
    }

    return res;
}

var countAndSay = function(n) {
    if (n == 1) return '1';

    return RLE(countAndSay(n-1));
};