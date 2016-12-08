// Link: https://challenge.makerpass.com/c/a82601c0c45177ddd91bdb1b152a01ec

// Description:
// Given a string representation of a 2d map, return the number of islands in the map. Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces are considered connected if they are adjacent (but not diagonal).

// (!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

// \n
// character. Check your console when submitting to see the input for yourself.

// Test Cases:
// countIslands( .0...
//               .00..
//               ....0 ) => 2

// countIslands( ..000.
//               ..000.
//               ..000.
//               .0....
//               ..000. ) => 3

// countIslands( ..000.
//               ..0...
//               ..0.0.
//               ..0...
//               ..000. ) => 2

// countIslands( 0...0
//               ..0..
//               0...0 ) => 5

// Code:
const countIslands = mapStr => {
  let islands = 0;
  const grid = mapStr.split("\n").map(function(row) { return row.split(''); });

  const checkIsland = (row, col) => {
    grid[row][col] = '.';
    if(row > 0 && grid[row - 1][col] === '0')
      checkIsland(row - 1, col);
    if(row < grid.length - 1 && grid[row + 1][col] === '0')
      checkIsland(row + 1, col);
    if(col > 0 && grid[row][col - 1] === '0')
      checkIsland(row, col -1)
    if(col < grid[row].length - 1 && grid[row][col + 1] === '0')
      checkIsland(row, col+1)
  }

  grid.forEach((row, rowInd) => {
    row.forEach((colVal, colInd) => {
      if(colVal === '0') {
        islands++;
        checkIsland(rowInd, colInd);
      }
    });
  });

  return islands;
}
