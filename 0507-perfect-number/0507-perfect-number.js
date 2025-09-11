/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    let sum = 1;

    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0) sum += i + (num / i);
    }

    return sum != 1 && sum == num;
};