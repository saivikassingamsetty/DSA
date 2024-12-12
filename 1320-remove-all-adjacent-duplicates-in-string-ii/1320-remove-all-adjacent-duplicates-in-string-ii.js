/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    // let stack = s.split('');
    // let foundKRepeated = true;

    // while (foundKRepeated) {
    //     let temp = [];
    //     let tempLength = 0;
    //     let tempFound = false;

    //     for (let ch of stack) {
    //         //when found 
    //         if (tempLength >= k - 1 && ch.repeat(k - 1) == temp.slice(tempLength - k + 1, tempLength).join('')) {
    //             temp.splice(tempLength - k + 1, k - 1);
    //             tempLength = tempLength - k + 1;
    //             tempFound = true;
    //         } else {
    //             temp.push(ch);
    //             tempLength++;
    //         }
    //     }

    //     stack = [...temp];
    //     foundKRepeated = tempFound;
    // }

    // return stack.join('');
    let stack = [];
    let freqStack = [];

    for (let ch of s) {
        if (stack.length > 0 && ch === stack[stack.length - 1]) {
            stack.push(ch);
            freqStack[freqStack.length - 1]++;
            
            if (freqStack[freqStack.length - 1] === k) {
                stack.splice(stack.length - k, k);
                freqStack.pop();
            }
        } else {
            stack.push(ch);
            freqStack.push(1);
        }
    }

    return stack.join('');
};