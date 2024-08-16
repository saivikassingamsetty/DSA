var TimeLimitedCache = function() {
    this.cache = new Map();
    this.timeouts = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let hasKey = this.cache.has(key);
    if (hasKey) {
        clearTimeout(this.timeouts.get(key));
    }

    this.cache.set(key, value);
    const timeout = setTimeout(() => {
        this.cache.delete(key);
        this.timeouts.delete(key);
    }, duration);
    this.timeouts.set(key, timeout);

    return hasKey;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.get(key) ?? -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};
