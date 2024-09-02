/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq = new Map();
    for (let item of s) freq.set(item, (freq.get(item) || 0) + 1);
    let sh = s.split('');
    sh.sort((a,b) => a.localeCompare(b));
    
    return sh.sort((a,b) => freq.get(b) - freq.get(a)).join('');
};