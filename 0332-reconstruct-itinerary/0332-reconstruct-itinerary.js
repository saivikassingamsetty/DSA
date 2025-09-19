/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
    const graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }

    for (let node in graph) graph[node].sort();

    let routes = [];

    const dfs = (from) => {
        while (graph[from] && graph[from].length) {
            let to = graph[from].shift();
            dfs(to);
        }
        routes.push(from);
    }

    dfs('JFK');
    return routes.reverse();
};
