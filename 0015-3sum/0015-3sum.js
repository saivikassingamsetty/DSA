/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    let map = {};

    //hashmap to store last index of each item
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }

    //using 2 pointer and hashmap

    for (let i = 0; i < nums.length; i++) {
        //skip duplicates
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }

        //for valid i
        let j = i + 1;

        while (j < nums.length) {
            //skip duplicates
            //here j != i+1 is important else it will be skipping cases like [-1, -1, 2] because i and i+1 are same ones
            if (j != i + 1 && nums[j] == nums[j - 1]) {
                j++;
                continue;
            }

            let key = -(nums[i] + nums[j]);
            if (key in map) {
                //to skip the duplicates
                if (map[key] > j) {
                    res.push([nums[i], nums[j], key]);
                }
            }

            j++;
        }
    }

    return res;
};