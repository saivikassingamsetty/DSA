var reverseList = function (head) {
    if (!head) return head

    const reverse = (prev, curr) => {
        if (!curr) return prev;

        let next = curr.next;
        curr.next = prev;
        return reverse(curr, next)
    }

    return reverse(null, head);
};