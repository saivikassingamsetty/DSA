/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    //stores the elements in decreasing order in a dequeue
    let dq = new Deque();
    let res = [];

    // for first window
    for (let i = 0; i < k; i++) {
        //remove all elements which are smalller than current as they can never be max
        while (dq.size() && nums[dq.back()] < nums[i]) {
            dq.popBack();
        }

        //add current element
        dq.pushBack(i);
    }

    //for first window
    res.push(nums[dq.front()]);

    for (let i = k; i < nums.length; i++) {
        // if the max is out of window remove it
        while (dq.size() && dq.front() <= i - k) {
            dq.popFront();
        }

        //remove all elements which are smalller than current as they can never be max
        while (dq.size() && nums[dq.back()] < nums[i]) {
            dq.popBack();
        }

        //add current element
        dq.pushBack(i);

        res.push(nums[dq.front()]);
    }

    return res;
};