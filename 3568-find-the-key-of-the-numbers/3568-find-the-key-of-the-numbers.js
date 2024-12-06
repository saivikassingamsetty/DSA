/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    // let a = 0;
    // let div = 1000;

    // while (div >= 1) {
    //     let x = (num1%div)/div;
    //     let y = (num2%div)/div;
    //     let z = (num3%div)/div;
    //     a += Math.min(Math.floor(num1%div), Math.floor(num2%div), Math.floor(num3%div)) * div;
    //     console.log(a, div, x, y, z)
    //     div /= 10;
    // };

    // return a;

    let a = String(num1);
    let b = String(num2);
    let c = String(num3);

    a = '0'.repeat(4 - a.length) + a;
    b = '0'.repeat(4 - b.length) + b;
    c = '0'.repeat(4 - c.length) + c;

    let res = '';

    for (let i=0; i<4; i++) {
        res += Math.min(+a[i], +b[i], +c[i]);
    }

    return +res;
};