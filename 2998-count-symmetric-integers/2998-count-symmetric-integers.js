/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let res = 0;
    for (let m = low; m <= high; m++) {
        let str = String(m);
        if (str.length % 2) continue;

        let a = 0;
        for (let i = 0; i < Math.floor(str.length / 2); i++) {
            a += +str[i];
        }

        for (let i = str.length-1; i >= Math.floor(str.length / 2); i--) {
            a -= +str[i];
            if (a < 0) continue;
        }

        if (a == 0) res++;
    }

    return res;
};