/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let res = '';
    let stars = 0;

    for (let ch of s.split('').reverse()) {
        //when star found
        if (ch == '*') stars++;
        //when non-star found but we have star count
        else if (stars) stars--;
        //when non-star found but we dont have star count
        else res = ch + res;
    }

    return res;
};