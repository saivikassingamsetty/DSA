/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let res = [first];
    let last = first;

    for(let i of encoded) {
        last ^= i;
        res.push(last);        
    }

    return res;
};