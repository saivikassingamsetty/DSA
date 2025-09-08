/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let a = list1;
    let b = list2;
    let res = new ListNode();
    let c = res;

    while (a || b) {
        aVal = a ? a.val: Infinity;
        bVal = b ? b.val : Infinity;
        if (aVal < bVal) {
            c.next = new ListNode(aVal);
            a = a.next;
        } else {
            c.next = new ListNode(bVal);
            b = b.next;
        }
        c = c.next;
    }

    return res.next;
};