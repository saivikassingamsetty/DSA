/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let letters = magazine.split('');
    let note = ransomNote.split('');

    return note.every((ch) => {
        const index = letters.indexOf(ch);
        if (index == -1) return false;
        delete letters[index];
        return true;
    })
};