/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (!head || (head && !head.next)) return null;

    let slow = head;
    let fast = head;

    do {
        slow = slow.next;
        fast = fast.next.next;
    } while (slow && fast && fast.next && slow != fast)

    //if not cycle
    if (slow != fast) return null;

    //if cycle find the node
    slow = head;
    while (slow != fast) {
        slow = slow.next;
        res = slow;
        fast = fast.next;
    }

    return slow;
};
