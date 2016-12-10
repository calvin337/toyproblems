// Link: https://challenge.makerpass.com/c/2b7ef4cf4f23dcf9585d075a4844826d

// Description:
// Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].

// Test Cases:
// isBalanced("(x + y) - (4)" ) => true
// isBalanced("(x + y) - (4)" ) => true
// isBalanced("(((10 ) ()) ((?)(:)))" ) => true
// isBalanced("(50)(") => false
// isBalanced("[{]}") => false

// Code:

function isBalanced (str) {
  var charArr = ['[', ']', '{', '}','(', ')'];
  var recentLefts = [];

  for(c of str) {
    if(c === '{' || c === '[' || c === '(') {
      recentLefts.push(c);
    } else if(charArr.indexOf(c) >= 0 && charArr.indexOf(recentLefts.pop()) + 1 !== charArr.indexOf(c)) {
        return false;
    }
  }

  return recentLefts.length === 0
}
