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
    const dijkstra = (adjList, source, count) => {
        let vis = new Set();
        let distance = new Array(count + 1).fill(Infinity);

        let pq = [source];
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
    const bellamanFord = (edges, total, source) => {
        let distance = new Array(total + 1).fill(Infinity);
        distance[source] = 0;

        let relaxationCount = 0;

        while (relaxationCount < n) {
            let updated = false;
            for ([u, v, w] of edges) {
                if (distance[u] + w < distance[v]) {
                    distance[v] = distance[u] + w;
                    updated = true;
                }
            }

            //early termination
            if (!updated) break;

            relaxationCount++;
        }

        return distance;
    }

    //SPA
    const SPFA = () => {
        let distance = new Array(n + 1).fill(Infinity);
        distance[k] = 0;
        let queue = new Queue();
        queue.enqueue([k, -1]);

        while (queue.size()) {
            let [u, p] = queue.dequeue();

            if (!adjList[u]) continue;

            for (let [v, w] of adjList[u]) {
                if (v != p && distance[u] + w < distance[v]) {
                    distance[v] = distance[u] + w;
                    queue.enqueue([v, u])
                }
            }
        }

        const res = Math.max(...distance.slice(1));
        return res == Infinity ? -1 : res;
    }

    //Floyd Warshall
    const FW = () => {
        let distance = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(Infinity));
        for (let source = 1; source <= n; source++) {
            distance[source][source] = 0;
        }

        for (let [u, v, w] of times) {
            distance[u][v] = w;
        }

        for (let source = 1; source <= n; source++) {
            for (let destination = 1; destination <= n; destination++) {
                for (let intermediary = 1; intermediary <= n; intermediary++) {
                    if (distance[source][destination] > distance[source][intermediary] + distance[intermediary][destination]) {
                        distance[source][destination] = distance[source][intermediary] + distance[intermediary][destination]
                    }
                }
            }
        }

        const res = Math.max(...distance[k].slice(1));
        return res == Infinity ? -1 : res;
    }

    //Johnson
    const johnson = () => {
        //Graph Augmentation
        let edges = [];
        for (let i = 1; i <= n; i++) edges.push([n + 1, i, 0]);
        edges = [...edges, ...times];

        //Bellaman Ford
        distance = bellamanFord(edges, n + 1, n + 1);

        // Recalibrate weights
        let newAdjList = Array.from({ length: n + 1 }, () => []);
        for (let [u, v, w] of times) {
            let newWeight = w + distance[u] - distance[v];
            newAdjList[u].push([v, newWeight]);
        }

        // Run Dijkstra from given start node k
        return dijkstra(newAdjList, k, n);
    }

    return johnson();
};