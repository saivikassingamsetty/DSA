/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
    let activeMinutes = {};

    for (let [id, time] of logs) {
        if (!activeMinutes[id]) activeMinutes[id] = new Set();
        activeMinutes[id].add(time);
    }

    let res = new Array(k).fill(0);

    for (let [id, uam] of Object.entries(activeMinutes)) {
        if (uam && uam.size >= 1 && uam.size <= k) res[uam.size - 1]++;
    }

    return res;
};