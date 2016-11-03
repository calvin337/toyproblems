// Given a string and an array of strings, return true if the string exists in the array, and false if it does not.
//
// DO NOT use .includes() in your solution.
//
// DO use a for loop.
//
// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.
//
// Examples
// Input	Output
// str:
// "x"
// array:
// [ "a", "x", "c" ]	true
// str:
// "x"
// array:
// [ "a", "b", "c" ]	false


function searchString (str, array) {
  return array.indexOf(str) >= 0;
}
