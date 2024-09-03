/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let dict = {};
    for (let [i, ch] of Object.entries(order)) dict[ch] = i;
    let res = s.split('');
    res.sort((a, b) => (dict[a] ?? -1) - (dict[b] ?? -1));

    return res.join('');
};