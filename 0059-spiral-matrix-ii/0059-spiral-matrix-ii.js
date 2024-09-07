/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    //this will create matrix with same array
    // let matrix = new Array(n).fill(new Array(n).fill(0));

    let matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    let [top, right, bottom, left] = [0, n-1, n-1, 0];
    let count = 1;

    while (count <= n**2) {
        //right
        for (let i=left; i<=right; i++) matrix[top][i] = count++;
        top++;
        //down
        for (let i=top; i<=bottom; i++) matrix[i][right] = count++;
        right--;
        //left
        for (let i=right; i>=left; i--) matrix[bottom][i] = count++;
        bottom--;
        //up
        for (let i=bottom; i>=top; i--) matrix[i][left] = count++;
        left++;
    }

    return matrix;
};

