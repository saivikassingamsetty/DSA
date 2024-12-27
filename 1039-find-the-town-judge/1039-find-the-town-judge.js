/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trustList = Array.from({length: n+1}, () => new Set());
    let trusters = new Set();

    for (const [a,b] of trust) {
        trustList[b].add(a);
        trusters.add(a);
    }

    for (let i=1; i<n+1; i++) {
        if (trustList[i].size == n-1 && !trusters.has(i)) return i;
    }

    return -1;
};