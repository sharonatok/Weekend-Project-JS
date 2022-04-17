// Ex5.7 - shortest words 
// Simple, given a string of words, return the length of the shortest word(s). 
// String will never be empty and you do not need to account for different data types.
const length_shortest_word = (str) => {
    return str.split(" ").sort((a, b) => a.length - b.length)[0].length;
};

console.log(length_shortest_word("hello my dear friend"));


