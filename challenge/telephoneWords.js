// Link: https://challenge.makerpass.com/c/3261321e9a43452201a25fe4a8ecf785

// Description:

// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, and returns a list of all of the words (in alphabetical order) that can be written on the phone with that number. (You should return all permutations, not only English words.)

// Test Cases:
// telephoneWords("00002") => [ "000A", "000B", "000C" ]
// telephoneWords("1123") => [ "11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF" ]

// Code:

const telephoneWords = (digitString, results = []) => {
  const numToLetters = {
  '0' : ['0'],
  '1' : ['1'],
  '2' : ['A', 'B', 'C'],
  '3' : ['D', 'E', 'F'],
  '4' : ['G', 'H', 'I'],
  '5' : ['J', 'K', 'L'],
  '6' : ['M', 'N', 'O'],
  '7' : ['P', 'Q', 'R', 'S'],
  '8' : ['T', 'U', 'V'],
  '9' : ['W', 'X', 'Y', 'Z']
  };

  const recurse = (currStr, digIndex) => {
    if(currStr.length === digitString.length) results.push(currStr)
    else {
      let currArr = numToLetters[digitString.charAt(digIndex)];
      for(let value of currArr) recurse(currStr + value, digIndex + 1);
    }
  }
  recurse('', 0);
  return results;
}
