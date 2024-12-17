/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let res = [];

    for (let i=0; i<s.length; i++) {
        if (s[i] == '#') {
            let back = res.splice(res.length-2, 2);
            res.push(Number(back.join('')));
        } 
        else res.push(+s[i]);
    }

    return res.reduce((a,i) => a + String.fromCharCode(i+96), '')
};