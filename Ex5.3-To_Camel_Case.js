// Ex5.3 - To Camel Case 
// Complete the method/function so that it converts dash/underscore delimited words into camel 
// casing. The first word within the output should be capitalized only if the original word was 
// capitalized (known as Upper Camel Case, also often referred to as Pascal case). 
 
// Examples 
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior" 

const toCamelCase = (str) => {
  return str
    .split(/[\-,\_]/)
    .map((word, index) => {
      if (index) {
        const charArr = word.split('');
        charArr[0] = charArr[0].toUpperCase();
        return charArr.join('');
      }
      return word;
    })
    .join('');
};

console.log(toCamelCase('The_Stealth_Warrior'));
console.log(toCamelCase('the_stealth_warrior'));