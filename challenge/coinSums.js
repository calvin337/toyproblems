// Link: https://challenge.makerpass.com/c/7174ea4bdfdfdf835b54bedebc6d5803

// Description:
// In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

// 1p
// 2p
// 5p
// 10p
// 20p
// 50p
// £1 (100p)
// £2 (200p)
// Given a given number of pence, return the possible number of ways someone could make change.

// It is possible to make 5 pence in the following ways:

// 5 * 1p

// 3 * 1p + 1 * 2p

// 1 * 1p + 2 * 2p

// 1 * 5p
// In other words, find all the possible combinations of coins that sum to a given pence value.

// Test Cases:
// coinSums(1) => 1
// coinSums(17) => 28


// Code:
var coins = [1,2,5,10,20,50,100,200];

function coinSums (total) {
let penceArr = [200, 100, 50, 20, 10, 5, 2, 1], count = 0;
  let recurse = (currSum, poss) => {
    if(currSum === total) {
      count++;
    }
    else {
      for(let i = 0; i < poss.length; i++) {
        let remainder = total - currSum;
        if(poss[i] <= remainder) {
          let numOfCoin = Math.floor(remainder / poss[i]);
          for(let j=0; j<numOfCoin; j++) {
            recurse(currSum + ((numOfCoin-j) * poss[i]), poss.slice(i+1));
          }
        }
      }
    }
}
  recurse(0, penceArr);
  return count;
}
