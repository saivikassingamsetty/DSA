/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    // return (gain.reduce((acc, item) => {
    //     acc[0] += item;
    //     acc[1] = Math.max(acc[1], acc[0]);
    // }, [0, 0]))[1];

    prefixArray = [0];
    gain.forEach(item => {
        prefixArray.push(item + prefixArray[prefixArray.length-1]);
    });

    return Math.max(...prefixArray);
};