/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let rev = null;
    let temp = head;

    while (temp) {
        rev = new ListNode(temp.val, rev);
        temp = temp.next;
    }

    console.log(rev)

    temp = head;
    while(temp) {
        if(temp.val !== rev.val) return false;
        temp = temp.next;
        rev = rev.next;
    }

    return true;
 };