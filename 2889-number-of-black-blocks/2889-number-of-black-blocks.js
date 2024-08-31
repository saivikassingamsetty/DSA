/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} coordinates
 * @return {number[]}
 */
var countBlackBlocks = function(m, n, coordinates) {
    let blocksCount = new Map();

    for (const [x,y] of coordinates) {
        //iterating over the block
        for (const [dx, dy] of [[0,0], [0, -1], [-1, 0], [-1, -1]]) {
            //validating the block cell
            if (x+dx >= 0 && x+dx < m-1 && y+dy >=0 && y+dy < n-1) {
                let uniqueKey = (x+dx)*n + (y+dy);
                blocksCount.set(uniqueKey, (blocksCount.get(uniqueKey) || 0)+1);
            }
        }
    }

    //we have now each block and thier black count
    //we don't have track of blocks with no blacks so initialize with max then reduce
    let blacks = new Array(5).fill(0);
    blacks[0] = (m-1)*(n-1);

    for (let [block, count] of blocksCount) {
        blacks[count]++;
        blacks[0]--;
    }

    return blacks;
};