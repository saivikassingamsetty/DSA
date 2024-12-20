/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let res = num;

    while(res > 9) {
        res = res.toString().split('').reduce((a,i) => a+(+i), 0);
    }

    return res;
};