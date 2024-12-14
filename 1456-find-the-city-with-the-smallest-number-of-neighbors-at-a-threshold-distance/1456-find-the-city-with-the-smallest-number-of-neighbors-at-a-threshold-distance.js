/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
    let adjacencyList = {};

    for (let [from, to, weight] of edges) {
        if (!(from in adjacencyList)) adjacencyList[from] = [];
        if (!(to in adjacencyList)) adjacencyList[to] = [];
        adjacencyList[from].push([to, weight]);
        adjacencyList[to].push([from, weight]);
    }

    //finding connectivity through bfs
    const findConnectivity = (city) => {
        let visited = new Array(n).fill(false);
        let queue = [[city, 0]];
        let connectivity = 0;

        while (queue.length) {
            let [currCity, currDistance] = queue.shift();

            if (visited[currCity]) continue;

            visited[currCity] = true;
            if (currCity !== city) connectivity++;

            if (currCity in adjacencyList) {
                for (let [nextCity, nextCityDistance] of adjacencyList[currCity]) {
                    let newDistance = currDistance + nextCityDistance;
                    if (!visited[nextCity] && newDistance <= distanceThreshold) {
                        queue.push([nextCity, newDistance]);
                    }
                }
            }
        }

        return connectivity;
    }

    //finding connectivity through Dijkstra
    const dijkstra = (city) => {
        //distances array
        let distances = new Array(n).fill(1e9);
        distances[city] = 0;

        //visited
        let visited = new Set();

        let pq = [city];

        while (pq.length) {
            //get the closest node
            pq.sort((a, b) => distances[a] - distances[b]);
            let currCity = pq.shift();

            //add to visisted
            visited.add(currCity);

            if (!(currCity in adjacencyList)) continue;

            for (let [nextCity, nextCityDistance] of adjacencyList[currCity]) {
                if (!visited.has(nextCity)) {
                    let newDistance = distances[currCity] + nextCityDistance;
                    if (newDistance < distances[nextCity]) {
                        // Update the shortest distance to this neighbor
                        distances[nextCity] = newDistance;
                        pq.push(nextCity);
                    }
                }
            }
        }

        return distances.filter(x => x <= distanceThreshold).length - 1;
    }

    const bellamanFord = (city) => {
        let distances = new Array(n).fill(Infinity);
        distances[city] = 0;

        //relax n-1 times
        for (let i = 0; i < n - 1; i++) {
            let updated = false;
            for (let [u, v, w] of edges) {
                if (distances[u] + w < distances[v]) {
                    distances[v] = distances[u] + w;
                    updated = true;
                }
                if (distances[v] + w < distances[u]) {
                    distances[u] = distances[v] + w;
                    updated = true;
                }
            }
            //early termination to avoid TLE
            if (!updated) break;
        }

        return distances.filter(x => x <= distanceThreshold).length - 1;
    }

    const SFPA = (city) => {
        let queue = [];
        let distances = new Array(n).fill(Infinity);
        distances[city] = 0;

        queue.push(city);

        while (queue.length) {
            let currCity = queue.shift();

            if (!(currCity in adjacencyList)) continue;

            for (let [nextCity, nextCityDistance] of adjacencyList[currCity]) {
                if (distances[currCity] + nextCityDistance < distances[nextCity]) {
                    distances[nextCity] = distances[currCity] + nextCityDistance;
                    queue.push(nextCity);
                }
            }
        }

        return distances.filter(x => x <= distanceThreshold).length - 1;
    }

    const floydWarshall = () => {
        //distance matrix
        let distances = new Array(n).fill(0);
        for (let i=0; i<n; i++) {
            distances[i] = new Array(n).fill(Infinity);
        }

        //source to source
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (i == j) distances[i][j] = 0;
            }
        }

        //direct edges
        for (let [u, v, w] of edges) {
            distances[u][v] = w;
            distances[v][u] = w;
        }

        //core algo
        //for each intermediary
        for (let k = 0; k < n; k++) {
            //for each source node
            for (let i = 0; i < n; i++) {
                //for each destination node
                for (let j = 0; j < n; j++) {
                    if (distances[i][j] > distances[i][k] + distances[k][j]) {
                        distances[i][j] = distances[i][k] + distances[k][j];
                    }
                }
            }
        }

        return distances;
    }

    let minConnectivity = 1e9;
    let city = 0;
    let connectivity;

    // //for each node
    // for (let i = 0; i < n; i++) {
    //     //run bfs
    //     // connectivity = findConnectivity(i);
    //     // connectivity = dijkstra(i);
    //     // connectivity = bellamanFord(i);
    //     connectivity = SFPA(i);
    //     if (connectivity <= minConnectivity) {
    //         minConnectivity = connectivity;
    //         city = i;
    //     }
    // }

    let distances = floydWarshall();
    for (let [i, distance] of Object.entries(distances)) {
        connectivity = distance.filter(x => x <= distanceThreshold).length -1;
        if (connectivity <= minConnectivity) {
            minConnectivity = connectivity;
            city = +i;
        }
    }


    return city;
};