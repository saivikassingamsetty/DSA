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
var deleteDuplicates = function (head) {
    if (!head) return null;

    let set = new Set();

    let temp = head;

    while (temp) {
        let temp2 = temp;
        while (temp2 && temp2.next && temp2.next.val == temp.val) {
            if (!set.has(temp2.val)) set.add(temp2.val);
            temp2 = temp2.next;
        }
        temp.next = temp2.next;
        temp = temp.next;
    }

    temp = head;
    while (temp) {
        let temp2 = temp;
        while (temp2 && temp2.next && set.has(temp2.next.val)) {
            temp2 = temp2.next;
        }

        temp.next = temp2.next;
        temp = temp.next;
    }

    return (set.has(head.val) ? head.next : head);
};