/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    let adjacencyList = {};

    for (let [employee, reporter] of Object.entries(manager)) {
        if (!adjacencyList[reporter+1]) adjacencyList[reporter+1] = [];
        adjacencyList[reporter+1].push([+employee+1, informTime[+employee]]);
    }

    //bfs to find longest time from source
    let queue = [];
    queue.push(['0', 0]);
    let totalTime = 0;

    while (queue.length) {
        let [manager, timeSoFar] = queue.pop();
        totalTime = Math.max(totalTime, timeSoFar);

        if (!adjacencyList[manager]) continue;

        for (let [reportee, infTime] of adjacencyList[manager]) {
            queue.push([reportee, timeSoFar + infTime]);
        }
    }

    return totalTime;
};