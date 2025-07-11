/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
    courses.sort((a, b) => a[1] - b[1]);

    let time = 0;
    let res = 0;
    //to take out most lengthy course taken so far to squeeze some time for shorter course maybe (swapping)
    let heap = new PriorityQueue((a, b) => b - a);
    for (let [duration, end] of courses) {
        time += duration;
        heap.enqueue(duration);
        res++;

        if (time > end) {
            time -= heap.dequeue(duration)
            res--;
        };
    }

    return res;
};