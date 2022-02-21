const x = [];
function bruteForce(a) {
    let maxTop = 0;
    for(let i = 0; i < a.length - 1; i++) {
        for (let j = i; j < a.length-1; j++) {
            let top = 0;
            for (let k = i; k<= j; k++) {
                top += a[k];
                if (top > maxTop) {
                    maxTop = top;
                    let bas = i;
                    let son = j,
                }
            }
        }
    }
    return maxTop;
}

console.log(bruteForce(x));