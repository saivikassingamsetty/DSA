/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.prefixW = new Array(w.length + 1).fill(0);
    for (let i = 0; i < w.length; i++) {
        this.prefixW[i + 1] = this.prefixW[i] + w[i];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    let number = Math.floor(Math.random() * this.prefixW[this.prefixW.length - 1]);
    let l = 0;
    let r = this.prefixW.length - 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (this.prefixW[mid] > number) r = mid
        else l = mid + 1
    }

    return l - 1;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */