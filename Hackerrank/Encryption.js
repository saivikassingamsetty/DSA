//https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=true

function encryption(s) {
    let extractedS = s.replace(' ','');
    let l = extractedS.length;
    let h = Math.floor(Math.sqrt(l));
    let w = Math.ceil(Math.sqrt(l));
    
    let res = '';
    for(let i=0; i<w; i++) {
        for (let j=0; j<=h; j++) {
            if (i+j*w >= l) break;
            res += extractedS[i+j*w];
        }
        res += " ";
    }
    
    return res;
}
