/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
    let start = 0;
    for (let num of derived) start ^= num;
    return start == 0;
};