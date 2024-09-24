/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return null;
    
    let prev = head;
    let temp = prev.next;

    while(temp) {
        if (temp.val === val) {
            prev.next = temp.next
        } else {
            prev = prev.next;
        }
        temp = prev.next;
    }

    return (head.val === val ? head.next: head);
};