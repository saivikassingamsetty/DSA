
var RandomizedCollection = function () {
    this.map = new Map();
    this.array = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
    if (!this.map.has(val)) {
        this.map.set(val, new Set());
        this.map.get(val).add(this.array.length);
        this.array.push(val);
        return true;
    } else {
        this.map.get(val).add(this.array.length);
        this.array.push(val);
        return false;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
    if (this.map.has(val)) {
        // next item in set
        let idx = this.map.get(val).values().next().value;
        this.map.get(val).delete(idx);
        let lastVal = this.array[this.array.length - 1];

        // if index is not at end, swap!
        if (idx !== this.array.length - 1) {
            this.array[idx] = lastVal;

            this.map.get(lastVal).delete(this.array.length - 1);
            this.map.get(lastVal).add(idx);
        }

        this.array.pop();
        if (!this.map.get(val).size) this.map.delete(val);
        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
    return this.array[Math.floor(Math.random() * this.array.length)];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */