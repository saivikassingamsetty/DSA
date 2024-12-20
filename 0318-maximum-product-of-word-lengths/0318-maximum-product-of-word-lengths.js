/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let res = 0;

    for (let i = 0; i < words.length; i++) {
        let set = new Set(words[i].split(''));
        for (let j = i + 1; j < words.length; j++) {
            dup = false;
            for (let ch of words[j]) {
                if (set.has(ch)) {
                    dup = true;
                    break;
                };
            }

            if (!dup) res = Math.max(res, words[i].length * words[j].length);
        }
    }

    return res;
};