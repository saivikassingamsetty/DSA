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
    let rev = null;
    let temp = head;

    while (temp) {
        rev = new ListNode(temp.val, rev);
        temp = temp.next;
    }

    return rev;
};