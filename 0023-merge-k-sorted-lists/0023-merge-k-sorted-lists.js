/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const merge = (ll1, ll2) => {
    // takes 2 sorted linked lists and merge them and returns a new linked list
    let ll3 = new ListNode(null);
    let temp1 = ll1;
    let temp2 = ll2;
    let temp3 = ll3;

    while (temp1 && temp2) {
        if (temp1.val < temp2.val) {
            temp3.next = temp1;
            temp1 = temp1.next;
        } else {
            temp3.next = temp2;
            temp2 = temp2.next;
        }

        temp3 = temp3.next;
    }

    temp3.next = temp1 || temp2;

    return ll3.next;
}

var mergeKLists = function (lists) {
    if (!lists || !lists.length) return null;

    let interval = 1;

    while (interval < lists.length) {
        for (let i = 0; i < lists.length - interval; i += 2 * interval) {
            lists[i] = merge(lists[i], lists[i + interval]);
        }

        interval *= 2;
    }

    return lists[0];
};