/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    let res = '';
    const words = sentence.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if ('aeiou'.indexOf(word[0].toLowerCase()) != -1) {
            res += word;
        } else {
            res += word.slice(1) + word[0];
        }

        res += 'ma' + 'a'.repeat(i + 1) + ' ';
    }

    return res.trim(' ');
};