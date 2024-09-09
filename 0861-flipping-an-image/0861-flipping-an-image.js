/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let flipped = image.map(row => row.reverse());
    return flipped.map(row => row.map(i => !i));
};