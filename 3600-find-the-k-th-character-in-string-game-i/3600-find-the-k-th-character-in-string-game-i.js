/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
    let res = 'a';

    while (res.length < k) {
        let prevLength = res.length;
        for (let i = 0; i < prevLength; i++) {
            res += String.fromCharCode((res[i].charCodeAt(0) + 1) % 97 + 97);
        }
    }

    return res[k - 1];
};