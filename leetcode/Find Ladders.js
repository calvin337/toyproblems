var findLadders = function(beginWord, endWord, wordList) {
    var sequences = [];
    var trySolution = function(currWord, sequence, choices) {
        if(currWord === endWord) {
            if(!sequences.length || sequence.length === sequences[0].length ) {
              sequences.push(sequence);
            } else if(sequences[0].length > sequence.length) {
              sequences = [];
              sequences.push(sequence);
            }
        } else {
            for(var i = 0; i < choices.length; i++) {
                let match = false;
                let count = 0;
                choices[i].split('').forEach((char, index) => {
                    if(endWord[index] === char) {
                        match = true;
                    }
                    if(currWord[index] === char) {
                      count++;
                    }
                });

                if(match && count === 2) {
                    let seq = sequence.slice();
                    seq.push(choices[i]);
                    let copy = choices.slice();
                    trySolution(copy.splice(i, 1)[0], seq, copy);
                }
            }
        }
    }

    wordList.push(endWord);
    trySolution(beginWord, [beginWord], wordList);
    return sequences;
};
