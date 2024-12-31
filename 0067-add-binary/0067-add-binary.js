/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    let res = '';
    let val = 0;

    function calculateValCanary(a, b, carry) {
        let val = 0;

        if (a + b + carry == 1) {
            val = 1;
            carry = 0;
        } else if ((a + b + carry == 2)) {
            val = 0;
            carry = 1;
        } else if ((a + b + carry == 3)) {
            val = 1;
            carry = 1;
        } else {
            val = 0;
            carry = 0;
        }

        return [val, carry];
    }

    while (i >= 0 && j >= 0) {
        [val, carry] = calculateValCanary(+a[i], +b[j], carry);
        res = val + res;
        i--;
        j--;
    }

    while (i >= 0) {
        [val, carry] = calculateValCanary(+a[i], 0, carry);
        res = val + res;
        i--;
    }

    while (j >= 0) {
        [val, carry] = calculateValCanary(0, +b[j], carry);
        res = val + res;
        j--;
    }

    if (carry) res = carry + res;

    return res;
};