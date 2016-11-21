// Link: https://challenge.makerpass.com/c/df608f8fbcc905b9e6628090028ee02a

// Description:
// Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

// Parameters:

// string (required) - a string of characters.

// Test Cases:
// allAnagrams("abc") => [ "abc", "acb", "bac", "bca", "cab", "cba" ]

// Code:
function allAnagrams (string) {
  let results = [];

  const recurse = (curr, choices) => {
    if(curr.length === string.length && !results.includes(curr)) {
      results.push(curr);
    } else {
      choices.forEach((choice, index) => {
        let newChoices = choices.slice();
        newChoices.splice(index, 1);
        recurse(curr+choice, newChoices);
      });
    }
  }

  recurse('', string.split(''));
  return results;
}
