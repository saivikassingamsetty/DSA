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

    while (a && b) {
        if (a.val < b.val) {
            c.next = new ListNode(a.val);
            a = a.next;
        } else {
            c.next = new ListNode(b.val);
            b = b.next;
        }
        c = c.next;
    }

    while (a) {
        c.next = new ListNode(a.val);
        a = a.next;
        c = c.next;
    }

    while (b) {
        c.next = new ListNode(b.val);
        b = b.next;
        c = c.next;
    }

    return res.next;
};