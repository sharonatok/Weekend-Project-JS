// Ex2.2 - One and Zero - Binary  
// Given an array of ones and zeroes, convert the equivalent binary value to an integer. 
 
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1. 
 
// Examples: 
 
// Testing: [0, 0, 0, 1] ==> 1 
// Testing: [0, 0, 1, 0] ==> 2 
// Testing: [0, 1, 0, 1] ==> 5 
// Testing: [1, 0, 0, 1] ==> 9 
// Testing: [0, 0, 1, 0] ==> 2 
// Testing: [0, 1, 1, 0] ==> 6 
// Testing: [1, 1, 1, 1] ==> 15 
// Testing: [1, 0, 1, 1] ==> 11 
// However, the arrays can have varying lengths, not just limited to 4

// const equivalent_binary_value = (arr) => {
//     let 
// }


const OneAndZero = (binary) => {
    let sum = 0,
      length = binary.length - 1;
    binary.forEach((element, idx) => (sum += 2 ** (length - idx) * element));
    return sum;
  };
  
  console.log(OneAndZero([0, 0, 0, 1]));
  console.log(OneAndZero([0, 0, 1, 0]));
  console.log(OneAndZero([0, 1, 0, 1]));
  console.log(OneAndZero([1, 0, 0, 1]));
  console.log(OneAndZero([0, 0, 1, 0]));
  console.log(OneAndZero([0, 1, 1, 0]));
  console.log(OneAndZero([1, 1, 1, 1]));
  console.log(OneAndZero([1, 0, 1, 1]));
  console.log(OneAndZero([0, 1, 0, 0, 0, 0, 0]));
  
