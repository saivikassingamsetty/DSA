/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let res = new Set(nums);

    for (let num of nums) {
        // res.add(Number(num.toString().split('').reverse().join('')));
        let reversed = 0;
        while(num) {
            reversed = reversed*10 + num%10;
            num = Math.floor(num/10);
        }
        res.add(reversed);
    }

    return res.size;
};