/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (!Boolean(obj)) return;
    if (Boolean(obj) && typeof obj !== 'object') return obj;

    let compactedObj = Array.isArray(obj) ? []: {};
    
    for (const [key, value] of Object.entries(obj)) {
        let compacted = compactObject(value);
        if (!Boolean(compacted)) continue;
        compactedObj[key] = compacted;
    }

    return Array.isArray(compactedObj) ? compactedObj.filter(Boolean): compactedObj;
};