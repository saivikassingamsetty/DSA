/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let mapA = new Array(256).fill(-1);
    let mapB = new Array(256).fill(-1);
    let a;
    let b;

    for (let i = 0; i < t.length; i++) {
        a = t.charCodeAt(i);
        b = s.charCodeAt(i);

        if (mapA[a] != -1 && mapA[a] != b) return false;
        if (mapB[b] != -1 && mapB[b] != a) return false;

        mapA[a] = b;
        mapB[b] = a;
    }

    return true;
};