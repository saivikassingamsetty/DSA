//https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?isFullScreen=true

//BruteForce O(N^3)
function isAnagrams(a, b) {
    let a_ = a.split('').sort((x,y) => x.charCodeAt(0)-y.charCodeAt(0));
    let b_ = b.split('').sort((x,y) => x.charCodeAt(0)-y.charCodeAt(0));
    
    return Number(a_.join() == b_.join());
}
function sherlockAndAnagrams(s) {
    let res = 0;
    
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < s.length; j++) {
            let str = s.slice(j, j+i);
            console.log("sub string", str)
            for (let k = j+1; k < s.length; k++) {
                console.log("comparing with", s.slice(k, k+i))
                res += isAnagrams(str, s.slice(k, k+i));
            }
        }
    }
    
    return res;
}

// Optimised (using chatgpt) O(N^2 + N);
// Here i iterated through the substrings and stored the count of sorted sub string
// later i found combinations from the count

function sherlockAndAnagrams(s) {
    let res = 0;
    let map = new Map();
    let substr;
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j <= s.length; j++) {
            substr = s.slice(i, j).split('').sort().join('');
            map.set(substr, (map.get(substr) ?? 0) + 1)
        }
    }
    
    //combinartions (pairs) from count = nc2
    for (const count of map.values()) {
        res += (count*(count-1))/2;
    }
    
    return res;
}
