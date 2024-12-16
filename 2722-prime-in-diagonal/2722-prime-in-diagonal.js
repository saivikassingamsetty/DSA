/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
    let largestPrime = 0;

    const isPrime = (num) => {
        if (num < 2) return -1;

        for (let i=2; i<=Math.floor(Math.sqrt(num)); i++) {
            if (num%i == 0) return -1;
        }

        return num;
    }

    for (let i=0; i< nums.length; i++) {
        largestPrime = Math.max(largestPrime, isPrime(nums[i][i]), isPrime(nums[i][nums.length - i - 1]));
    }

    return largestPrime;
};