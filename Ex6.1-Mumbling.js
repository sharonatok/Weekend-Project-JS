// Advanced Iteration Logic 
// Ex6.1 - Mumbling 
 
// This time no story, no theory. The examples below show you how to write function 
// accum​: 
// Examples: 
// accum("abcd") -> "A-Bb-Ccc-Dddd" 
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy" 
// accum("cwAt") -> "C-Ww-Aaa-Tttt" 
// The parameter of accum is a string which includes only letters from ​a..z​ and ​A..Z​.

const accum = (str) => {
    let accum_str = "";
    for (let i = 0; i < str.length; i++) {
        accum_str += str[i].toUpperCase() + str[i].toLowerCase().repeat(i);
          if (i < str.length - 1) {
            accum_str += "-";
          }
        }
        return accum_str;
      }
      
      console.log(accum("hello"));
      
