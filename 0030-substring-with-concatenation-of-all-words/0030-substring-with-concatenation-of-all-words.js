/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
    // brute force is to store all concatenated strings and iterate for each concatinated string
    // if the concatinated string is present or not, if yes index else continue
    // O(N^2) * O(N^2) = O(N^4)

    // Obv not DP, because we need string indices not a numeric result
    // maybe sliding window with freq counter (hashmap)?

    // recursion is also possible but due to time constraints - we can ignore it

    let freqMap = {};
    for (let word of words) freqMap[word] = (freqMap[word] ?? 0) + 1;

    let res = [];
    let wordLength = words[0].length;
    let totalLength = wordLength * words.length;

    for (let i = 0; i <= s.length - totalLength; i++) {
        let currMap = Object.assign({}, freqMap);
        let isValid = true;

        for (let j = i; j < i + totalLength; j += wordLength) {
            let word = s.slice(j, j + wordLength);
            if (word in currMap) {
                currMap[word]--;
                if (!currMap[word]) delete currMap[word];
            } else {
                isValid = false;
                break;
            };
        }

        if (isValid) res.push(i);
    }

    return res;
};