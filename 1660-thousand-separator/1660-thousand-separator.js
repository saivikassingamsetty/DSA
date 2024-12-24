/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    // if (!n) return '0';
    // let res = '';

    // let num = n;
    // while (num) {
    //     let a = String(num%1000);
    //     res = '.' + ('0'.repeat(3-a.length) + a) + res;
    //     num = Math.floor(num/1000);
    // }

    // return res.slice(1);

    let a = String(n);
    let res = '';

    for (let i=a.length-1; i>=0; i--) {
        if (i < a.length-1 && (a.length-1 - i)%3 == 0) res = '.' + res;
        res = a[i] + res;
    }

    return res;
};