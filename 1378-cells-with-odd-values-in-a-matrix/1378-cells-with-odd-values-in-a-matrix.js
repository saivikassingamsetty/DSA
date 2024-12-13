/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    let rows = Array.from({ length: m }, (v) => 0);
    let columns = Array.from({ length: n }, (v) => 0);
    let res = 0;

    //populating the indeces count across the particular row and particular column
    for (let [i, j] of indices) {
        rows[i] += 1;
        columns[j] += 1;
    }

    //finding number of even and odd across the rows and columns count
    let rowsEven = rows.filter(x => x % 2 == 0).length;
    let columnsEven = columns.filter(x => x % 2 == 0).length;
    let rowsOdd = rows.length - rowsEven;
    let columnsOdd = columns.length - columnsEven;

    //finding the final result based on the even and odd count
    return rowsOdd * columnsEven + rowsEven * columnsOdd;
};