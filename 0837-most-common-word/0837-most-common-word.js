/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    // let regExp = /[^a-z]/g;
    // const words = paragraph.toLowerCase().split(' ').map(i => i.replace(regExp, ''));

    let words = [];
    let i = 0;
    let j = 0;
    while (j < paragraph.length) {
        if (paragraph[j].toLowerCase() < 'a' || paragraph[j].toLowerCase() > 'z') {
            if (i!=j)
                words.push(paragraph.slice(i, j).toLowerCase());
            i = j+1;
        }
        j++;
    }

    if (i!=j) words.push(paragraph.slice(i, j).toLowerCase());

    const freq = {};

    words.forEach(i => {
        if (!freq[i]) freq[i] = 0;
        freq[i]++;
    });

    let res = '';
    let max = 0;

    for (let word in freq) {
        if (!banned.includes(word) && freq[word] > max) {
            max = freq[word];
            res = word;
        }
    }

    return res;
};