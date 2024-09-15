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
var swapNodes = function(head, k) {
    let length = 0;
    let temp = head;
    let node1Val;
    let node2Val;

    while(temp) {
        length++;
        if (length === k) node1Val = temp.val;
        temp = temp.next;
    }

    temp = head;
    let count=0;
    while(temp) {
        if (count === length-k) node2Val = temp.val;
        temp = temp.next;
        count++;
    }

    temp = head;
    let c = 0;
    while(temp) {
        if (c == k-1) temp.val = node2Val;
        else if (c == length-k) temp.val = node1Val;
        c++;
        temp = temp.next;
    }

    return head;
};