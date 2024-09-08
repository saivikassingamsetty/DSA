/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function(m, n, head) {
    let matrix = new Array(m).fill().map(() => new Array(n).fill(-1));
    let count = 0;
    let [left, right, top, bottom] = [0, n-1, 0, m-1];
    let temp = head;

    while(temp) {
        for (let j=left; j<=right && temp; j++) {
            matrix[top][j] = temp.val;
            temp = temp.next;
        }

        top++;

        for (let i=top; i<=bottom && temp; i++) {
            matrix[i][right] = temp.val;
            temp = temp.next;
        }

        right--;

        for (let j=right; j>=left && temp; j--) {
            matrix[bottom][j] = temp.val;
            temp = temp.next;
        }

        bottom--;

        for (let i=bottom; i>=top && temp; i--) {
            matrix[i][left] = temp.val;
            temp = temp.next;
        }

        left++;
    }

    return matrix;
};