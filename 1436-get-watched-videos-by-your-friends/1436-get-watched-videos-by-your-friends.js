/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function (watchedVideos, friends, id, level) {
    let freqArray = {};
    let vis = new Set();
    const queue = Queue.fromArray([]);

    vis.add(id);
    queue.enqueue([id, 0]);

    while (queue.size()) {
        let [node, l] = queue.dequeue();
        if (l == level) {
            for (let vid of watchedVideos[node]) {
                freqArray[vid] = (freqArray[vid] || 0) + 1;
            }
            continue;
        }

        for (let frnd of friends[node]) {
            if (!vis.has(frnd)) {
                vis.add(frnd);
                queue.enqueue([frnd, l + 1]);
            }
        }
    }



    return Object.keys(freqArray).sort((a, b) => {
        if (freqArray[a] < freqArray[b]) return -1;
        else if (freqArray[a] > freqArray[b]) return 1;
        else {
            if (a < b) return -1;
            else 1;
        }
    });
};