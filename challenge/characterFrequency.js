// Link: https://challenge.makerpass.com/c/619b43dbf94ddfcea714d2b28c8b6c93

// Description:
// Write a function that takes as its input a string and returns an array of arrays as shown below sorted in descending order by frequency and then by ascending order by character.

// Test Cases:
// characterFrequency("aaabbc") => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// characterFrequency("mississippi") => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// characterFrequency("") => []

// Code:
function characterFrequency (string) {
  // let freq = [];
  // for(c of string) {
  //   let made = false;
  //   for(arr of freq) {
  //     if(arr[0] === c) {
  //       arr[1]++;
  //       made = true;
  //     }
  //   }
  //   if(!made) {
  //     freq.push([c, 1]);
  //   }
  // }

  // return freq;
  return groupRepeatedChars(string)
    .sort((a,b) => b.length - a.length || a.localeCompare(b))
    .map(item => [item[0], item.length])
}

const groupRepeatedChars = (str) => {
  return str
    .split('')
    .sort()
    .join('')
    .match(/(\D)\1*/g) || [];
}
