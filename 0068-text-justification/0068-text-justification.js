/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    if (!words.length) return [];

    let length = 0;
    let l = 0;
    let i = 0;

    // Packaging
    while (i < words.length) {
        let addLen = words[i].length + (i == 0 ? 0 : 1);
        if (length + addLen > maxWidth) break;
        l += words[i].length;
        length += addLen;
        i++;
    }

    let lineWords = words.slice(0, i);
    let rest = words.slice(i);

    let res = '';

    let totalSpaces = maxWidth - l;
    let numGaps = lineWords.length - 1;

    // last or only one - left justify
    if (!rest.length || lineWords.length == 1) {
        res = lineWords.join(' ');
        res += ' '.repeat(maxWidth - res.length);
    } else {
        // Full justiﬁcation
        let evenSpace = Math.floor(totalSpaces / numGaps);
        let extraSpace = totalSpaces % numGaps;
        for (let j = 0; j < numGaps; j++) {
            res += lineWords[j];
            res += ' '.repeat(evenSpace + (j < extraSpace ? 1 : 0));
        }
        res += lineWords[lineWords.length - 1];
    }

    return [res, ...fullJustify(rest, maxWidth)];
};