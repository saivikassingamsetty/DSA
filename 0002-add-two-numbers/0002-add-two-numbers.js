/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = null;
    let c = null;
    let sum = 0;
    let carry = 0;

    let a = l1;
    let b = l2;

    while (a && b) {
        sum = (a.val + b.val + carry) % 10;
        carry = Math.floor((a.val + b.val + carry) / 10);

        if (c) {
            c.next = new ListNode(sum);
            c = c.next;
        }
        else {
            c = new ListNode(sum);
            head = c;
        }

        a = a.next;
        b = b.next;
    }

    while (a) {
        sum = (a.val + carry) % 10;
        carry = Math.floor((a.val + carry) / 10);
        c.next = new ListNode(sum);
        c = c.next;
        a = a.next;
    }

    while (b) {
        sum = (b.val + carry) % 10;
        carry = Math.floor((b.val + carry) / 10);
        c.next = new ListNode(sum);
        c = c.next;
        b = b.next;
    }

    if (carry) {
        c.next = new ListNode(carry);
    }

    return head;
};