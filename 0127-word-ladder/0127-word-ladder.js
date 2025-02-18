/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    const visited = new Set([beginWord]);
    const wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) return 0;

    const queue = new Queue();
    queue.enqueue([beginWord, 1]);

    while (queue.size()) {
        const [word, level] = queue.dequeue();

        for (let i = 0; i < word.length; i++) {
            for (let ch = 97; ch <= 122; ch++) {
                let nextWord = word.slice(0, i) + String.fromCharCode(ch) + word.slice(i + 1);

                if (nextWord == endWord) {
                    return level + 1;
                }
                
                if (!visited.has(nextWord) && wordSet.has(nextWord)) {
                    queue.enqueue([nextWord, level + 1]);
                    visited.add(nextWord);
                }
            }
        }
    }

    return 0;
};