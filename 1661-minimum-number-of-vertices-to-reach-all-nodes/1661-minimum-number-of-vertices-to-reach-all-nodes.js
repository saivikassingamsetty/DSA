/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    // let adjacencyList = Array.from({ length: n }, () => []);
    // for (let [from, to] of edges) adjacencyList[from].push(to);
    // adjacencyList.sort((a,b) => a.length  b.length);
    // console.log(adjacencyList)

    // let visited = new Array(n).fill(false);
    // let res = [];

    // const dfs = (node) => {
    //     visited[node] = true;
    //     for (let next of adjacencyList[node]) if (!visited[next]) dfs(next);
    // }

    // for (let i = 0; i < n; i++) {
    //     if (!visited[i]) {
    //         dfs(i);
    //         res.push(i);
    //     }
    // }

    // return res;
    let res = new Set(new Array(n).fill(0).map((_, index) => index));
    for (let [from, to] of edges) {
        res.delete(to);
    }

    return [...res];
};