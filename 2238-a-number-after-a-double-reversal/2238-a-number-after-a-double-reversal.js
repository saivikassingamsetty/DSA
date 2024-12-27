/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
    let reversed = 0;
    let copy = num;
    while (num) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    let reversed2 = 0;
    while (reversed) {
        reversed2 = reversed2 * 10 + reversed % 10;
        reversed = Math.floor(reversed / 10);
    }

    return reversed2 == copy;
};