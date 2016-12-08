// Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.

function longestRun (string) {
  let run = [0, 0];
  let currStart = 0;
  let currChar = '';
  let lastInd = 0;
  string.split('').forEach((str, ind) => {
    if(str !== currChar) {
      if(run[1] - run[0] < (ind-1 - currStart)) {
        run = [currStart, ind-1];
      }
      currStart = ind;
      currChar = str;
    }
    lastInd = ind;
  });

  if(run[1] - run[0] < lastInd-1-currStart) {
    run = [currStart, lastInd];
  }
  return run;
}
