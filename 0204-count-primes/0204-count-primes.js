/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let isPrime = new Array(n).fill(true);
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
            let j = 2;
            while (j * i < n) {
                isPrime[j * i] = false;
                j++;
            }
        }
    }

    return count;
};