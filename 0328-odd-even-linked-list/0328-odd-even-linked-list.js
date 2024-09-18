/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
    let last = head;
    let count = 1;

    while (last && last.next) {
        last = last.next;
        count++;
    }

    if (count <= 2) return head;

    let curr = head;
    let index = 0;
    while (index < Math.floor(count / 2)) {
        if (curr.next) {
            let temp = curr.next;
            curr.next = curr.next.next;
            last.next = temp;
            last = last.next;
            last.next = null;
            curr = curr.next;
            index++;
        }
    }

    return head;
};