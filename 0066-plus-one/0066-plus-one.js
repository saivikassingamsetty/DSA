/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    let n = digits.length;
    let res = new Array(n).fill(0);

    for (let i=n-1; i>=0; i--) {
        let num = digits[i] + carry;
        carry = num > 9 ? 1: 0;
        res[i] = num%10;
    }

    if (carry) return [carry, ...res];

    return res;
};