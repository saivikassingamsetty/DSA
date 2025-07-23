/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    let prev = null;
    let temp = head;
    let n = 0;
    while (temp) {
        prev = temp;
        temp = temp.next;
        n++;
    }

    k %= n;
    if (n <= 1 || k == 0) return head;

    temp = head;
    let i = 0;
    while (i < n - k - 1) {
        temp = temp.next;
        i++;
    }

    let next = temp.next;
    temp.next = null;
    prev.next = head;

    return next;
};