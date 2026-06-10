/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let heap = new MaxHeap();

    for (let stone of stones) heap.push(stone);

    while (heap.size() > 1) {
        let bigger = heap.pop();
        let second = heap.pop();

        if (bigger > second) heap.push(bigger - second);
    }

    return heap.size() ? heap.pop() : 0;
};