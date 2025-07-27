/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function (words) {
    let adjList = {};
    let indegree = {};

    // Track all unique chars
    for (let word of words) {
        for (let ch of word) {
            if (!adjList[ch]) {
                adjList[ch] = new Set();
                indegree[ch] = 0;
            }
        }
    }

    for (let i = 1; i < words.length; i++) {
        let word1 = words[i - 1];
        let word2 = words[i];

        // critical invalid case
        if (word1.length > word2.length && word1.startsWith(word2)) return '';

        let j = 0;
        while (j < word1.length && j < word2.length) {
            // travel till they has same prefix
            if (word1[j] == word2[j]) {
                j++;
                continue;
            }

            // find difference char and build tree
            if (!adjList[word1[j]].has(word2[j])) {
                adjList[word1[j]].add(word2[j]);
                indegree[word2[j]]++;
            }
            break;
        }
    }

    // Topo Sort - Khans
    let queue = new Queue();
    for (let [key, degree] of Object.entries(indegree)) {
        if (degree == 0) queue.enqueue(key);
    }

    let res = '';

    while (queue.size()) {
        let char = queue.dequeue();
        res += char;

        for (let nextChar of adjList[char] || []) {
            indegree[nextChar]--;
            if (indegree[nextChar] == 0) queue.enqueue(nextChar);
        }
    }

    return res.length != Object.keys(indegree).length ? '' : res;
};