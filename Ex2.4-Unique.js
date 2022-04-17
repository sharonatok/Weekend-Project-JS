// Ex2.4 - Unique 
 
// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers

const findUniq = (arr) => {
for (let i = 0; i < arr.length-1; i++) {
    if(arr[i] !== arr[i + 1]) {
    return arr[i + 1];
    }
}
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))