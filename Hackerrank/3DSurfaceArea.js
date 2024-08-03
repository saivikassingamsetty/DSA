function surfaceArea(A) {
    let [h,w] = [A.length, A[0].length];
    //covers bottom and top part
    let res = 2*h*w;
    let sides;
     
    for (let i=0; i<h; i++) {
        for (let j=0; j<w; j++) {
            //4 sides
            sides = Number(i===0) + Number(i===h-1) + Number(j===0) + Number(j===w-1)
            res += A[i][j]*(sides)
            
            //middle sides
            if (i>0) res += Math.abs(A[i][j] - A[i-1][j]);
            if (j>0) res += Math.abs(A[i][j] - A[i][j-1]);
        }
    }
    
    return res;
}
