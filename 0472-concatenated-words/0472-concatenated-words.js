/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
    let wordSet = new Set(words);
    let maxWordLength = 0;
    for (let word of words) maxWordLength = Math.max(maxWordLength, word.length)

    const isValid = (word, i, count, memo) => {
        if (i == word.length) return count > 1;
        if (memo[i] !== undefined) return memo[i];

        for (let j = i + 1; j <= Math.min(word.length, i + maxWordLength); j++) {
            if (wordSet.has(word.substring(i, j))) {
                if (isValid(word, j, count + 1, memo)) return memo[i] = true;
            }
        }

        return memo[i] = false;
    }

    let res = [];
    for (let i = 0; i < words.length; i++) {
        //to skip checking for same word again
        wordSet.delete(words[i]);
        if (isValid(words[i], 0, 0, {})) res.push(words[i]);
        wordSet.add(words[i]);
    }

    return res;
};