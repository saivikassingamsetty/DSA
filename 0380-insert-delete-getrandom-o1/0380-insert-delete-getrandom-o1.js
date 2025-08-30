
var RandomizedSet = function () {
    this.map = new Map();
    this.array = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (!this.map.has(val)) {
        this.map.set(val, this.array.length);
        this.array.push(val);
        return true;
    }

    return false;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    if (this.map.has(val)) {
        let idx = this.map.get(val);
        this.map.delete(val);

        // core logic, swap current index and remove last
        [this.array[this.array.length - 1], this.array[idx]] = [this.array[idx], this.array[this.array.length - 1]];
        this.array.pop();
        // updating the index
        this.map.set(this.array[idx], idx);

        return true;
    }

    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    let key = Math.floor(Math.random(0, 1) * this.array.length);

    return this.array[key];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */