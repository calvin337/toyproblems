// Link: https://challenge.makerpass.com/c/7e86e656648667f224573a935a1e69bf

// Description: In an array of every possible anagram of a given string, what index would the original string occupy?

// Consider an anagram as any sequence of letters. For any word with at least two different letters, there are other words composed of the same letters but in a different order (for instance, RESISTANCE/ANCESTRIES, which happen to both be dictionary words; for our purposes “SISTANERCE” is also a “word” composed of the same letters as these two).

// Given a word, return its index number, starting at 1 (not 0), for some reason.

// Here is the catch: Your function should be able to accept any word 20 letters or less in length (possibly with some letters repeated), and take no more than 5000 milliseconds to run.

// Test Cases:
// anagramPosition("BAEBEE" ) => 12
// anagramPosition("ABBS" ) => 1
// anagramPosition("BABS" ) => 4
// anagramPosition("ARCTIC" ) => 42
// anagramPosition("STARK"  ) => 92

// Code:

//IN PROGRESS, DOESNT WORK FOR LARGE STRINGS
function anagramPosition (string) {
  let anaObj = {};
  let index = 0;
  let strArr = string.split('').sort();
  var recurse = function(choices, currStr) {
    if(currStr.length === string.length && !anaObj[currStr]) {
      anaObj[currStr] = currStr;
      if(currStr === string) {
       	index = Object.keys(anaObj).length;
      }
    } else {
      for(var i = 0; i < choices.length; i++) {
        let curr = choices.splice(i, 1);
        recurse(choices, currStr+curr);
        choices.splice(i, 0, curr);
      }
    }
  }
  recurse(strArr, '');
  return index;
}
