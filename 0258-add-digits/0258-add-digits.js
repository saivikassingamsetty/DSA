/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    // let res = num;

    // while(res > 9) {
    //     res = res.toString().split('').reduce((a,i) => a+(+i), 0);
    // }

    // return res;

    //digit root
    return num == 0 ? 0 : (num % 9 == 0 ? 9 : num % 9)
};