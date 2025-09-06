/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let stack = [];
    for (let current of num) {
        while (k && stack.length && stack[stack.length-1] > current) {
            k--;
            stack.pop();
        }
        stack.push(current);
    }

    while(k--) stack.pop();

    let res = stack.join('').replace(/^0+/, '');
    return res.length ? res : '0';
};