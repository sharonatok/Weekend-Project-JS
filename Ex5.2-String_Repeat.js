// Ex5.2 - String Repeat 
// Write a function called repeat_str which repeats the given string src exactly count times. 
// repeatStr(6, "I") // "IIIIII" 
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello" 

const repeatStr = (count , string) => {
 let newString = string.repeat(count);
 return newString
}

console.log(repeatStr(6, "I"));  // "IIIIII" 
console.log(repeatStr(5, "Hello")); // "HelloHelloHelloHelloHello" 