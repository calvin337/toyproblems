// Given a divider number and an array of numbers, return true if the array contains a number evenly divisible by the divider, and false otherwise.
//
// DO NOT use array.find()
//
// DO use a for loop.
//
// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

function findDivisible (divider, array) {
  let found = false;
  for(let item of array) {
    found = (item % divider === 0 && item !== 0);
  }
  return found;
}
