/**
 * @param {number} n
 * @return {number}
 */
var knightDialer = function (n) {
    const jumps = [
        [4, 6],
        [6, 8],
        [7, 9],
        [4, 8],
        [3, 9, 0],
        [],
        [1, 7, 0],
        [2, 6],
        [1, 3],
        [2, 4]
    ];

    //2d dp array of n * 10 size
    let dp = Array.from({ length: n }, (x) => Array.from({ length: 10 }, (v, i) => 0));
    //dp[i][j] represents count of valid possibilties to achieve a i digit number from j square

    //base case
    for (let i = 0; i < 10; i++) {
        dp[0][i] = 1;
    }

    for (let remain = 1; remain < n; remain++) {
        for (let square = 0; square <= 9; square++) {
            for (let nextSquare of jumps[square]) {
                dp[remain][square] = (dp[remain][square] + dp[remain - 1][nextSquare]) % (1e9 + 7);
            }
        }
    }

    return dp[n - 1].reduce((a, i) => (a + i) % (1e9 + 7), 0);


};
