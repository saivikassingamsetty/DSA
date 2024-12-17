/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
    // let res = 0;
    // let zeroes = 0;
    // let ones = 0;
    // let start = 0;
    // let end;
    // let firstZeroFound = false;

    // for (end = 0; end < s.length; end++) {
    //     console.log(start, end, zeroes, ones, res);

    //     //travel till first zero
    //     if (s[end] != '0' && !firstZeroFound) {
    //         start++;
    //         continue;
    //     }

    //     firstZeroFound = true;

    //     //start of new balanced substring
    //     if (s[end] == '0' && ones != 0) {
    //         console.log(start, end)
    //         res = Math.max(res, 2 * Math.min(zeroes, ones));
    //         start = end;
    //         zeroes = 0;
    //         ones = 0;
    //     }
        
    //     if (s[end] == '0') zeroes++;
    //     else {
    //         ones++;
    //         if (ones > zeroes) {
    //             firstZeroFound = false;
    //             res = Math.max(res, 2 * Math.min(zeroes, ones));
    //             start = end;
    //             ones = 0;
    //             zeroes = 0;
    //         }
    //     };
    // }

    // res = Math.max(res, 2 * Math.min(zeroes, ones));
    // return res;

    //searching for ‘01’ and exapanding both ways and calculate length
    let res = 0;
    let n = s.length;

    for (let i=1; i<n; i++) {
        if (s[i] == '1' && s[i-1] == '0') {
            res = Math.max(res, 2);

            //expand both ways
            let j = 1;
            while (i-1-j >= 0 && s[i-1-j] == '0' && i+j < n && s[i+j] == '1') {
                res = Math.max(res, j*2 + 2);
                j++;
            }
        }
    }

    return res;
};