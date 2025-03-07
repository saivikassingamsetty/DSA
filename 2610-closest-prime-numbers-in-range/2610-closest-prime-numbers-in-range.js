/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    let isPrime = new Array(right + 1).fill(true);
    isPrime[1] = false;

    for (let i = 2; i <= right; i++) {
        if (isPrime) {
            for (j = i * 2; j <= right; j += i) {
                isPrime[j] = false;
            }
        }
    }

    let primes = [];
    for (let i = left; i <= right; i++) if (isPrime[i]) primes.push(i);

    let res = [-1, -1];
    let dist = Infinity;

    for (let i = 1; i < primes.length; i++) {
        if (primes[i] - primes[i - 1] < dist) {
            res = [primes[i - 1], primes[i]];
            dist = primes[i] - primes[i - 1];
        }
    }

    return res;
};