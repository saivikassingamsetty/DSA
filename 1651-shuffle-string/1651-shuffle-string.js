/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res = new Array(s.length);
    indices.forEach((item,index) => (res[item] = s[index]));
    return res.join('');
};