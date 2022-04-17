// Basic  
// Ex1.1 - Yes or No 
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" 
// string for false. 
 
const boolean_value = (boolean_val) => {
    if (boolean_val === true) {
        return "Yes";
    } else if (boolean_val === false) {
        return "No";
    }
    }
    console.log(boolean_value(true));
    console.log(boolean_value(false));
    console.log(boolean_value(1));
