// Link: https://challenge.makerpass.com/c/1a3561fb38b3d79dcb48c60ae7b3ea76

// Description:
// Given an alphabet and a string of text, write a method that tallies the count of each letter defined in said alphabet (case insensitive), then return the result of this tally.

// Test Cases:
// alphaCount("aBc", "aabbccdd" ) => "a:2,b:2,c:2"
// alphaCount("x", "Racer X is my friend :)" ) => "a:2,b:2,c:2"
// alphaCount("123", "o hai"   ) => "no matches"


// Code:
function alphaCount (alphabet, text) {
  alphaObj = {};
  console.log(alphabet.split(''));
  alphabet.split('').forEach(letter => {
    alphaObj[letter.toLowerCase()] = 0;
  });
  console.log(alphaObj);
  text.split('').forEach(letter => {
    if(alphaObj[letter.toLowerCase()] !== undefined) {
      alphaObj[letter.toLowerCase()]++;
    }
  });

  let valid = [];
  Object.keys(alphaObj).forEach(letter => {
    if(alphaObj[letter] !== 0) {
      valid.push(letter + ':' + alphaObj[letter]);
    } else {
      alphaObj[letter] = undefined;
    }
  })

  if(valid.length === 0) return 'no matches';
  return valid.join(',');
}
