/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    let p1 = null;
    let p2 = null;

    let i = 0;
    let temp = list1;
    while (temp) {
        if (i == a-1) p1 = temp;
        if (i == b) p2 = temp;
        temp = temp.next;
        i++;
    }

    p1.next = list2;

    temp = p1.next;
    while(temp.next) temp = temp.next;

    temp.next = p2.next;

    return list1;
};