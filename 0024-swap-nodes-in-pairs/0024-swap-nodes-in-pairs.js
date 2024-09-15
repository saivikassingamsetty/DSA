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
var swapPairs = function (head) {
    let temp = head;

    while (temp) {
        if (!temp.next) break;

        [temp.val, temp.next.val] = [temp.next.val, temp.val];

        temp = temp.next.next;
    }

    return head;
};