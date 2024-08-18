/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let res = {};

    for (let item of arr1) res[item.id] = res[item.id] ? {...res[item.id], ...item} : item;
    for (let item of arr2) res[item.id] = res[item.id] ? {...res[item.id], ...item} : item;

    return Object.values(res);
};