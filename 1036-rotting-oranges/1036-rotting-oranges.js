/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let queue = [];
    let healthyOrangesCount = 0;
    let m = grid.length;
    let n = grid[0].length;

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (grid[i][j] == 2) queue.push([i,j,0]);

            if (grid[i][j] == 1) healthyOrangesCount++;
                
        }
    }

    let visited = new Set();
    let maxTime = 0;

    while (queue.length) {
        let [i,j,time] = queue.shift();
        visited.add(`${i} ${j}`);
        maxTime = Math.max(maxTime, time);

        for (let [di,dj] of [[0,1],[0,-1],[1,0],[-1,0]]) {
            if (i+di >= 0 && i+di < m && j+dj >= 0 && j + dj < n) {
                if (!visited.has(`${i+di} ${j+dj}`) && grid[i+di][j+dj] == 1) {
                    healthyOrangesCount--;
                    queue.push([i+di, j+dj, time+1]);
                    visited.add(`${i+di} ${j+dj}`);
                }
            }
        }
    }

    return (healthyOrangesCount ? -1: maxTime);
};