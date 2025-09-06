var leastInterval = function (tasks, n) {
    // Frequency of each character
    let freq = new Array(26).fill(0);
    for (let t of tasks) freq[t.charCodeAt(0) - 65]++;
    let heap = freq.filter(x => x > 0);

    let time = 0;
    while (heap.length > 0) {
        // To collect the tasks for this cycle
        let temp = [];
        let tasksDone = 0;
        for (let i = 0; i <= n; i++) {
            if (heap.length > 0) {
                temp.push(heap.shift());
                tasksDone++;
            } else {
                temp.push(0); // pad with zero for completeness
            }
        }
        // Put back those with remaining count
        for (let count of temp) {
            if (count > 1) heap.push(count - 1);
        }
        // Re-sort to maintain max-heap behaviour
        heap.sort((a, b) => b - a);

        // If heap is empty after this round, don't add idle time
        time += heap.length === 0 ? tasksDone : (n + 1);
    }
    return time;
};
