// Given an array of numbers, return all even numbers from the array.
//
// DO NOT use .filter() in your solution.
//
// DO use a for loop.
//
// TRY solving it with non-mutative recursion, only after you’ve solved it using a for loop.

function findEven (numbers) {
  let evens = [];
  numbers.forEach(number => {
    if(!(number % 2))
      evens.push(number);
  })
  return evens;
}
