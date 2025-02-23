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
var reverseKGroup = function (head, k) {
    if (!head) return null;

    let count = 0;
    let temp = head;

    while (temp && count < k) {
        temp = temp.next;
        count++;
    }

    if (count == k) {
        let prev = null;
        let curr = head;
        let next = null;

        while (count) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            count--;
        }

        head.next = reverseKGroup(temp, k);

        return prev;
    }

    return head;
};