/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findShortestCycle = function (n, edges) {
    let adjList = Array(n).fill().map(() => [])

    for (let [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }

    let minCycleLength = Infinity;

    const bfs = (node) => {
        let distance = new Array(n).fill(-1);
        let parent = new Array(n).fill(-1);
        let queue = new Queue();
        queue.enqueue(node);
        parent[node] = -1;
        distance[node] = 0;

        while (queue.size()) {
            let currNode = queue.dequeue();

            for (let next of adjList[currNode]) {
                //if not visited
                if (distance[next] == -1) {
                    parent[next] = currNode;
                    distance[next] = distance[currNode] + 1;
                    queue.enqueue(next);
                }
                //if visited already but not parent or a valid child - Cycle!
                else if (parent[currNode] != next && parent[next] != currNode) {
                    minCycleLength = Math.min(minCycleLength, distance[currNode] + distance[next] + 1);
                }
            }
        }

        return Infinity;
    }


    for (let i = 0; i < n; i++) bfs(i);

    return minCycleLength == Infinity ? -1 : minCycleLength;
};