/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let n = gas.length;
    let curr = 0;
    let tank = 0;

    for (let i = 0; i < 2 * n; i++) {
        tank += gas[i % n] - cost[i % n];
        curr++;
        if (tank < 0) {
            tank = 0;
            curr = 0;
        }
        if (curr >= n) return i - (n - 1);
    }

    return -1;
};