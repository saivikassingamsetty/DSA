/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
    let num = n;
    let steps = 0;

    while (num > 0) {
        let closestMin = Math.pow(2, Math.floor(Math.log2(num)));
        let closestMax = Math.pow(2, Math.ceil(Math.log2(num)));
        num = Math.min(num - closestMin, closestMax - num);
        steps++;
    }

    return steps;
};