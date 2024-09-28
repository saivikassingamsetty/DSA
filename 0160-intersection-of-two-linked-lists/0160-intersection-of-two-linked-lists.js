/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let a = headA;
    let b = headB;

    while (a && b) {
        if (a == b) return a;

        a = a.next;
        b = b.next;

        if (!a) a = headB;
        else if (!b) b = headA;
    }

    return null;
};