/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
    // let res = '';
    // let add = 0;

    // for (let str of strs) {
    //     // for (let i = 0; i < str.length; i++) {
    //     //     if (i % 2 == 0) {
    //     //         res += (strs[i] + add % 256);
    //     //         add = add * 2 + 1;
    //     //     } else {
    //     //         res += (strs[i] - add % 256);
    //     //         add = add * 2;
    //     //     }
    //     // }

    //     res += (str + '-----VIKAS-----');
    // }


    return strs.join('-----VIKAS-----');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
    return s.split('-----VIKAS-----');
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */