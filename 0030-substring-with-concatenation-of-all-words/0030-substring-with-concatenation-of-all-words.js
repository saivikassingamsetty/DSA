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

    for (let offset = 0; offset < wordLength; offset++) {
        let currMap = {};
        let count = 0;
        let left = offset;

        for (let right = offset; right <= s.length - wordLength; right += wordLength) {
            let word = s.slice(right, right + wordLength);

            if (freqMap[word]) {
                currMap[word] = (currMap[word] || 0) + 1;
                count++;

                while (currMap[word] > freqMap[word]) {
                    // remove to explore
                    let w = s.slice(left, left + wordLength);
                    currMap[w]--;
                    count--;
                    left += wordLength;
                }

                if (count == words.length) {
                    res.push(left);
                    // remove to explore
                    let w = s.slice(left, left + wordLength);
                    currMap[w]--;
                    count--;
                    left += wordLength;
                }
            } else {
                currMap = {};
                count = 0;
                left = right + wordLength;
            }

        }
    }

    return res;
};