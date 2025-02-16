/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
    const adjList = new Array(n + 1).fill().map(() => []);
    for (let [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    //Arrival time state 
    let dist = Array.from({ length: n + 1 }, () => [Infinity, Infinity]);

    // BFS Queue with initial node 1 and time 0
    let queue = [[1, 0]];
    dist[1][0] = 0;

    while (queue.length > 0) {
        [node, timeSoFar] = queue.shift();

        // Determine wait time at the current node based on the traffic light
        let waitTime = 0;
        if (Math.floor(timeSoFar / change) % 2 == 1) {
            waitTime = change - (timeSoFar % change);
        }

        let nextTime = timeSoFar + time + waitTime;

        // Go through each neighbor of the current node
        for (let next of adjList[node]) {
            if (nextTime < dist[next][0]) {
                //arriving first time to this node
                dist[next][0] = nextTime;
                queue.push([next, nextTime]);
            }

            else if (nextTime > dist[next][0] && nextTime < dist[next][1]) {
                //arriving second time
                dist[next][1] = nextTime;
                if (next == n) return nextTime;
                queue.push([next, nextTime]);
            }
        }
    }

    return -1;
};