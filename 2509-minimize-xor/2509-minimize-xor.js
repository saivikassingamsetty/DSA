/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function (num1, num2) {
    let a = num1.toString(2);
    let aSetBits = a.split('').filter(i => +i).length;
    let bSetBits = num2.toString(2).split('').filter(i => +i).length;
    let diff = bSetBits - aSetBits;
    let res = a.split('');
    let i = a.length - 1;

    if (!diff) {
        return num1;
    } else if (diff < 0) {
        while (diff != 0 && i >= 0) {
            if (a[i] == '1') diff++;
            res[i] = '0';
            i--;
        }
    } else {
        while (diff != 0 && i >= 0) {
            if (a[i] == '0') diff--;
            res[i] = '1';
            i--;
        }
        if (diff) {
            res = [...new Array(diff).fill('1'), ...res];
        }
    }

    return parseInt(res.join(''), 2);
};