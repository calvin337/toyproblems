var findLadders = function(beginWord, endWord, wordList) {
    var sequences = [];
    var trySolution = function(currWord, sequence, choices, brute) {
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
                if((brute || match) && count === (endWord.length -1)) {
                    let seq = sequence.slice();
                    seq.push(choices[i]);
                    let copy = choices.slice();
                    trySolution(copy.splice(i, 1)[0], seq, copy);
                }
            }
        }
    }

    let newChoices = [];
    for(let item of wordList) {
        newChoices.push(item);
    }

    if(newChoices.indexOf(endWord) < 0) newChoices.push(endWord);

    trySolution(beginWord, [beginWord], newChoices, false);
    if(!sequences.length) {
        console.log('inside')
        trySolution(beginWord, [beginWord], newChoices, true);
    }

    return sequences;
};
