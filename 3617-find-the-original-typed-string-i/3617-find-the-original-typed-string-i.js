/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let dupChars = 0;
    let dups = 1;
    let totalDups = 0;

    for (let i=1; i<word.length; i++) {
        if (word[i] == word[i-1]) dups++;
        else {
            totalDups += dups - (dupChars > 0 ? 1: 0);
            dupChars++;
            dups = 1;
        }
    }

    totalDups += dups - (dupChars > 0 ? 1: 0);

    return totalDups;
};