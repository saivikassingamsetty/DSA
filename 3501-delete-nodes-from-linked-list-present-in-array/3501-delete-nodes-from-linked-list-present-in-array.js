/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(nums, head) {
    let prev = head;
    let temp = head.next;
    let numsSet = new Set(nums);

    while(temp) {
        if (numsSet.has(temp.val)) {
            prev.next = temp.next;
        } else {
            prev = prev.next;
        }

        temp = prev.next;
    }

    return (numsSet.has(head.val) ? head.next: head);
};