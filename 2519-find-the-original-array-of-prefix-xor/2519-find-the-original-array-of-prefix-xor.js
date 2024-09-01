/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    // let res = [...pref];

    // for (let i=1; i<pref.length; i++) {
    //     res[i] ^= pref[i-1];
    // }

    // return res;

    let res = pref[0];

    for (let i=1; i<pref.length; i++) {
        let temp = pref[i];
        pref[i] ^= res;
        res = temp;
    }

    return pref;
};