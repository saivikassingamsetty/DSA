/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
    let vis = new Array(26).fill(false);

    for (let ch of s) {
        if (vis[ch.charCodeAt(0)-97]) return ch;
        vis[ch.charCodeAt(0)-97] = true;
    }
};