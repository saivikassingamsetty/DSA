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
var deleteDuplicates = function(head) {
    let temp = head;

    while (temp) {
        let temp2 = temp;
        while(temp2 && temp2.next && temp2.next.val == temp.val) {
            temp2 = temp2.next;
        }
        temp.next = temp2.next;
        temp = temp.next;
    }

    return head;
};