/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const namesToheightsMap = {};
    for (let i=0; i<names.length; i++) {
        namesToheightsMap[heights[i]] = names[i];
    };

    heights.sort((a,b) => b-a);

    return heights.map(item => namesToheightsMap[item]);
};