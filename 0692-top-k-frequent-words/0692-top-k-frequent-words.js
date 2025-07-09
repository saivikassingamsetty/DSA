/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    let map = {};
    for (let word of words) map[word] = (map[word] || 0) + 1;
    let keys = Object.keys(map);
    keys.sort((a, b) => {
        if (map[a] < map[b]) return 1
        else if (map[a] > map[b]) return -1
        else {
            if (a > b) return 1
            else return -1
        }
    });

    return keys.slice(0, k);
};