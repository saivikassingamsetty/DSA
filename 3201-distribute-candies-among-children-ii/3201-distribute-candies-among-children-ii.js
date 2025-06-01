/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function (n, limit) {
    let res = 0;
    let ways = 0;

    for (let i = 0; i <= Math.min(n, limit); i++) {
        //Number of ways to distribute (n-i) candies to 2 children
        // let say remianing are 8 and limit is 8, 0,8, 1,7, (2,6) (3,5), (4,4), (5,3), (6,2), 7,1, 8,0 -9
        // let say remianing are 8 and limit is 7, 1,7, (2,6) (3,5), (4,4), (5,3), (6,2), 7,1 - 7
        // let say remianing are 8 and limit is 6, (2,6) (3,5), (4,4), (5,3), (6,2) - 5
        // let say remianing are 8 and limit is 5, (3,5), (4,4), (5,3) - 3
        // let say remianing are 8 and limit is 4, (4,4) - 1

        // means remaining+1 - (remaining - limit)*2
        //sometimes limit can be bigger (edge case, handle that with limiting)
        ways = (n - i + 1) - (n - i - Math.min(limit, n - i)) * 2;
        res += (ways > 0 ? ways : 0)
    }

    return res;
};