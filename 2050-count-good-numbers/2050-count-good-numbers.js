/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
    let evens = 5;
    let primes = 4;
    let evenPlaces = Math.ceil(n / 2);
    let oddPlaces = Math.floor(n / 2);
    const MOD = 1000000007n;

    // Fast exponentiation using iterative approach
    var pow = function (x, n) {
        let ans = 1n;
        x = BigInt(x);
        n = BigInt(n);

        while (n > 0) {
            if (n % 2n === 1n) {
                ans = (ans * x) % MOD;
            }

            x = (x * x) % MOD;
            n = n / 2n;

        }

        return ans;
    };

    return Number((pow(evens, evenPlaces) * pow(primes, oddPlaces)) % MOD);
};
