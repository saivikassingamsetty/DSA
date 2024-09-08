/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    let max = 0;
    let res = [0, 0];

    const isNice = (i, j) => {
        for (let ch of s.slice(i, j)) {
            if (!s.slice(i,j).includes(ch.toUpperCase()) || !s.slice(i,j).includes(ch.toLowerCase())) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let nice = isNice(i, j);
            if (nice && max < j - i) {
                max = j - i;
                res = [i, j];
            }
        }
    }

    return s.slice(res[0], res[1]);
};