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
var reverseList = function (head) {
    if (!head) return head

    let curr = head;
    let next = curr.next;

    while (curr && next) {
        let nextToNext = next.next;
        next.next = curr;
        curr = next;
        next = nextToNext;
    }

    head.next = null;

    return curr;
};