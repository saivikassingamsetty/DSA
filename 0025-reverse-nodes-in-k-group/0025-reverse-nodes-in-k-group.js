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
var reverseKGroup = function(head, k) {
    if (!head) return null;

    let revList = null;
    let i = 0;
    let temp = head;

    while (temp && i < k) {
        revList = new ListNode(temp.val, revList);
        temp = temp.next;
        i++;
    }

    if (i < k) return head;

    if (i == k) {
        curr = revList;
        while (curr.next) curr = curr.next;
        curr.next = reverseKGroup(temp, k);
    }

    return revList;
};