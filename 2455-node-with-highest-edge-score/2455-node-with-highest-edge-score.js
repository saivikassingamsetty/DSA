/**
 * @param {number[]} edges
 * @return {number}
 */
var edgeScore = function (edges) {
    let n = edges.length;
    let edgeScore = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        edgeScore[edges[i]] += i;
    }

    let max = 0;
    let score = edgeScore[max];

    for (let i = 0; i < n; i++) {
        if (edgeScore[i] > score) {
            max = i;
            score = edgeScore[max]
        }
    }

    return max;
};