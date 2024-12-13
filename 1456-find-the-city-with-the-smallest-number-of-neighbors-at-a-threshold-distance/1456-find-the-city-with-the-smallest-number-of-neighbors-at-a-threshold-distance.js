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

    let minConnectivity = 1e9;
    let city = 0;
    let connectivity;

    //for each node
    for (let i = 0; i < n; i++) {
        //run bfs
        // connectivity = findConnectivity(i);
        connectivity = dijkstra(i);
        console.log("Hi", connectivity)
        if (connectivity <= minConnectivity) {
            minConnectivity = connectivity;
            city = i;
        }
    }

    return city;
};