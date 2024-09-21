/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let leftSum = 0;
    let totalSum = Math.floor(n*(n+1)/2);

    for (let i=1; i<=n; i++) {
        leftSum += i;
        if (leftSum === totalSum) return i;
        totalSum -= i;
    }

    return -1;
};