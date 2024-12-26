/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let stack = [];
    let count = 0;
    let res = 0;

    let temp = head;
    while(temp) {
        temp = temp.next;
        count++;
    }

    let i = 0;
    temp = head;
    while (temp && i < count/2) {
        stack.push(temp.val);
        temp = temp.next;
        i++;
    }

    while (temp) {
        res = Math.max(res, stack.pop() + temp.val);
        temp = temp.next;
    }

    return res;
};