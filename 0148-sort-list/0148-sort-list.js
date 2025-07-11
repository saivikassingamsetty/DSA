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
var sortList = function (head) {
    const merge = (l1, l2) => {
        let dummy = new ListNode();
        let cur = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                cur.next = l1;
                l1 = l1.next;
            } else {
                cur.next = l2;
                l2 = l2.next;
            }
            cur = cur.next;
        }

        cur.next = l1 || l2;
        return dummy.next;
    };

    const mergeSort = (node) => {
        if (!node || !node.next) return node;

        let prev = null;
        let slow = node;
        let fast = node;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        prev.next = null;

        const a = mergeSort(node);
        const b = mergeSort(slow);

        return merge(a, b);
    }

    return mergeSort(head);
};