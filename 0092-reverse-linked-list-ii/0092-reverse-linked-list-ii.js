/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let segmentPreHead = null;
    let segmentHead = null;
    let segmentTail = null;

    let i = 1;
    let temp = head;
    while (temp) {
        if (i == left - 1) segmentPreHead = temp;
        if (i == left) segmentHead = temp;
        if (i == right) segmentTail = temp;
        temp = temp.next;
        i++;
    }

    console.log(segmentPreHead, segmentHead, segmentTail);

    let c = left;
    while (c < right) {
        let tail = segmentTail.next;
        let prevHead = segmentHead;

        console.log(c, head, tail, prevHead)
        segmentHead = segmentHead.next;

        console.log(segmentHead);

        segmentTail.next = prevHead;
        prevHead.next = tail;

        console.log(segmentTail)
        c++;
    }


    if (segmentPreHead) segmentPreHead.next = segmentHead
    else head = segmentHead;

    return head;
};