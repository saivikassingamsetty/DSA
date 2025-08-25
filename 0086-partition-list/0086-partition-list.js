/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let res1 = new ListNode();
    let res1Temp = res1;
    let res2 = new ListNode();
    let res2Temp = res2;
    let curr = head;

    while (curr) {
        let next = curr.next;
        curr.next = null;
        if (curr.val < x) {
            res1Temp.next = curr;
            res1Temp = res1Temp.next;
        } else {
            res2Temp.next = curr;
            res2Temp = res2Temp.next;
        }
        curr = next;
    }

    res1Temp.next = res2.next;

    return res1.next;
};