// Link: https://challenge.makerpass.com/c/cc351d4770d17c7fea10c5b7d02a2f8e

// Description:
// Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
// and prints out every value found, but in a spiral from the upper left in to the center.

// Test Cases:
// spiralTraversal([ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], [ 11, 12, 13, 14, 15 ], [ 16, 17, 18, 19, 20 ], [ 21, 22, 23, 24, 25 ] ]]) => [ 1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13 ]
// spiralTraversal([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ], [ 10, 11, 12 ], [ 13, 14, 15 ], [ 16, 17, 18 ], [ 19, 20, 21 ], [ 22, 23, 24 ] ]) => [ 1, 2, 3, 6, 9, 12, 15, 18, 21, 24, 23, 22, 19, 16, 13, 10, 7, 4, 5, 8, 11, 14, 17, 20 ]
// spiralTraversal([ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]) => [ 1, 2, 3, 4 ]

// spiralTraversal([ [ 1, 2, 3, 4, 5, 6, 7 ] ]) =>[ 1, 2, 3, 4, 5, 6, 7 ]


// Code:
const spiralTraversal = matrix => {
  let borders = { right: matrix[0].length, down: matrix.length, left: 0, up: 0 }, output = [];

  while(output.length < matrix.length * matrix[0].length) {
    for(var i = borders.left; i < borders.right; i++)
      output.push(matrix[borders.up][i]);
    borders.up++;

    for(var j = borders.up; j < borders.down; j++)
      output.push(matrix[j][borders.right - 1]);
    borders.right--;

    if(output.length < matrix.length * matrix[0].length) {
	    for(var k = borders.right - 1; k >= borders.left; k--)
	      output.push(matrix[borders.down - 1][k]);
    }
    borders.down--;

    if(output.length < matrix.length * matrix[0].length) {
	    for(var l = borders.down - 1; l >= borders.up; l--)
	      output.push(matrix[l][borders.left]);
    }
    borders.left++;
  }
  return output;
}
