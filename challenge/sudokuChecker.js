// Link: https://challenge.makerpass.com/c/884dcd80f67ba5cc99f8d27ff68e8a77

// Description:
// Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

// A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

// (!!!) NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. In other words, when you see a break, it's actually a

// \n
// character. Check your console when submitting to see the input for yourself.

// Test Cases:
// sudokuCheck(735814296
            // 896275314
            // 214963857
            // 589427163
            // 362189745
            // 471356982
            // 923541678
            // 648792531
            // 157638429) => 'solved'

// Code:
const sudokuCheck = boardStr => {
  let rows = boardStr.split('\n'), valid = true, cols = [], blocks = [];
  rows.forEach(() => {
    cols.push([]), blocks.push([]);
  })

  const checkGroup = (rowArr, nums) => {
    for(let num of rowArr) {
      if(nums.includes(num))
        return false;
      nums.push(num);
    }
    return true;
  }

  for(var j = 0; j < rows.length; j++) {
    let currBlock = 0 + 3 *parseInt(j/3);
    rows[j].split('').forEach((element, index) => {
      cols[index].push(element);
      if(index%3 === 0 && index>0)
        currBlock++;
      blocks[currBlock].push(element);
    })
    valid = checkGroup(rows[j].split(''), []);
    if(!valid) return 'invalid';
  }

  for(let col of cols) {
    valid = checkGroup(col, []);
    if(!valid) return 'invalid';
  }

  for(let block of blocks) {
    valid = checkGroup(block, []);
    if(!valid) return 'invalid';
  }
  return 'solved';
}
