/**
 * string manipulation- Strings are useful for holding data that can be represented in text form.
 * there are diffrent ways of accessing and manipulating data in a string
 */
/*
 * 1. .length is one way of finding the length of a string in numerical form
 */
var string = "opspark is a coding school";
console.log(string.length); // => prints 26
/*
* 2. build and concatenate strings using +
*/
var str1 = "hello";
var str2 = "world";
console.log(str1 + "" + str2); //=> prints "hello world"
/*
*3. access strings by using bracket notation and index number
*/
var str = "cat";
console.log(str[1]); // ptints "a"
/*
* 4. .length - 1 is used to get the last index in the string
*/
var str = "cat"
console.log(str.length - 1); // => prints 2
/*
* 5. slice()-  extracts a part of a string and returns the extracted part in a new string.
*   The method takes 2 parameters: the start position, and the end position (end not included)
*   If you omit the second parameter, the method will slice out the rest of the string:
*/
var str = "the cat is grey";
console.log(str.slice(4, 7)); // => prints cat with no space taken out before or after cat
console.log(str.slice(3)); // => priints cat is grey starting from the c in cat
console.log(str.slice(-7)); // => prints is grey starting from the last index and moving 7 spaces
/*
* 6. substring()- substring() is similar to slice().
*    The difference is that substring() cannot accept negative indexes
*/
var str = "the grey cat";
console.log(str.substring(4, 9)); // => prints grey
console.log(str.substring(4)) // => prints grey cat
/*
* 7. substr()- substr() is similar to slice().
*    the difference is that the second parameter specifies the length of the extracted part.
*/
var str = "the cat is grey";
console.log(str.substr(4, 3)); // => prints 'cat'
/*
* 8. replace()- The replace() method replaces a specified value with another value in a string:
*    it creats a new string and by default only replaces the first value found and not on duplicates
*/
let text = "Please visit school!";
let newText = text.replace("school", "opspark"); // => prints "please visit opspark"
/*
* 9. split()- string can be converted to an array with the split() method
*    If the separator is omitted, the returned array will contain the whole string in index [0].
*    If the separator is "", the returned array will be an array of single characters
*/
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
/*
* 10. toUpperCase() & toLowerCase()- changes letters to either case chosen. used in cases where
*   case sensitivity can be a concern
*/
var str = "cat";
str = str.toUpperCase();
console.log(str); // => prints CAT