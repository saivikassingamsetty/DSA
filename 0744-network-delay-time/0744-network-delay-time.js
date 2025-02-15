/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
    let adjList = new Array(n + 1).fill().map(() => []);
    for ([u, v, w] of times) {
        adjList[u].push([v, w]);
    }

    //need to find the shortest path from each node to every other node

    //Djikstra
    const dijkstra = () => {
        let vis = new Set();
        let distance = new Array(n + 1).fill(Infinity);

        let pq = [k];
        distance[k] = 0;

        while (pq.length) {
            //simulates Priority Queue
            let u = pq.sort((a, b) => distance[b] - distance[a]).pop();
            vis[u] = true;

            if (!adjList[u]) continue;

            for (let [v, w] of adjList[u]) {
                if (!vis[v] && distance[u] + w < distance[v]) {
                    distance[v] = distance[u] + w;
                    pq.push(v);
                }
            }
        }

        const res = Math.max(...distance.slice(1));

        return res == Infinity ? -1 : res;
    }


    //Bellaman Ford

    //SPA

    //Floyd Warshall

    //Johnson

    return dijkstra();
};