/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let pq = new PriorityQueue((a, b) => a - b);
    let maxRooms = 0;

    for (let [start, end] of intervals) {
        while (pq.size() && pq.front() <= start) pq.dequeue();
        pq.enqueue(end);
        maxRooms = Math.max(maxRooms, pq.size());
    }

    return maxRooms;
};
