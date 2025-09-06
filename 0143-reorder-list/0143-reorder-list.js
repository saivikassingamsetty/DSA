/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const reverse = (node) => {
        if (!node) return;
        
        let prev = null;
        let curr = node;
        let next = node.next;

        while (curr && next) {
            curr.next = prev;
            prev = curr;
            curr = next;
            next = next.next;
        }

        curr.next = prev;

        return curr;
    }

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let reversedSecondHalf = reverse(slow.next);
    slow.next = null;
    
    let curr1 = head;
    let curr2 = reversedSecondHalf;

    while (curr1 && curr2) {
        let next1 = curr1.next;
        let next2 = curr2.next;
        curr1.next = curr2;
        curr2.next = next1;
        curr1 = curr2.next;
        curr2 = next2;
    }
};