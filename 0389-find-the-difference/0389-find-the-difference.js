/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    //solution using Hashmap
    let track = {};
    for (const char of s) track[char] = 1 + (track[char] || 0)
    for (const char of t) {
        if (!(char in track)) return char;
        track[char]--;
        if (track[char] == -1) return char;
    }

    //Solution using 2 pointer and sort
    // const sortedS = s.split('').sort((a,b) => a.localeCompare(b)).join('');
    // const sortedT = t.split('').sort((a,b) => a.localeCompare(b)).join('');

    // let i;
    // for (i=0; i<s.length; i++) if (sortedS[i] != sortedT[i]) return sortedT[i];

    // return sortedT[i];
};