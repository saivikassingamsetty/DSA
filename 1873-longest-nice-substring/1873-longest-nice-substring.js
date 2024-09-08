/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    let max = 0;
    let res = [0, 0];

    const isNice = (i, j) => {
        for (let ch of s.slice(i, j)) {
            // console.log(s, i, j, ch, s.slice(i,j).includes(ch.toUpperCase()), s.slice(i,j).includes(ch.toLowerCase()))
            if (!s.slice(i,j).includes(ch.toUpperCase()) || !s.slice(i,j).includes(ch.toLowerCase())) {
                // console.log("bye bye", s.slice(i,j), ch)
                return false;
            }
        }

        console.log("returning nice")
        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let nice = isNice(i, j);
            console.log("nice", i, j, nice, max)
            if (nice && max < j - i) {
                max = j - i;
                res = [i, j];
            }
        }
    }

    return s.slice(res[0], res[1]);
};