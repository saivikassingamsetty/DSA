/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    prev = node
    temp = node.next;

    while(temp) {
        prev.val = temp.val;

        if (!temp.next) {
            prev.next = null;
            break;
        }

        prev = temp;
        temp = temp.next;
    }
};