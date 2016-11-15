// Link: https://challenge.makerpass.com/c/0708d039ca960f0803642df02885f53e

// Description:
// Implement a function that sorts an array of numbers using the “mergesort” algorithm.

// Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
// after the first merge, and so on.)

// This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.

// Illustration of an iterative approach:

//   1.Initial step: Input array is split into "sorted" sublists
//      [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

//   2.Merge step: Adjacent sublists are merged into sorted sublists
//      [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

//   3.Repeat merge step:
//      [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

//   4.Repeat merge step:
//      [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

//   5.Done! Return the sorted array:
//      [1,2,3,4,4,7,9]

// Illustration of a recursive approach:

//   1.Split the input array in half
//    [4, 7, 4, 3, 9, 1, 2] -> [4, 7, 4], [3, 9, 1, 2

//   2.Both sides are sorted recursively:
//    [4, 7, 4] -> [4, 4, 7]
//    [3, 9, 1, 2] -> [1, 2, 3, 9]

//   3.Both halves are merged:
//    [4, 7, 4], [3, 9, 1, 2] -> [1, 2, 3, 4, 4, 7, 9]
// Step 2 might seem a bit mystical - how do we sort both sides? The simple answer is that we use mergesort! After all, mergesort sorts arrays, right? We can test this on [4, 7, 4] by just following the steps above but imagining that [4, 7, 4] is the whole array, which is what happens when you call mergesort on it.

//    1.Split the input array in half
//      [4, 7, 4] -> [4], [7, 4]

//    2.Both sides are sorted recursively:
//     [4] -> [4]
//     [7, 4] -> [4, 7]

//    3.Both halves are merged:
//    [4], [4, 7] -> [4, 4, 7]
// I cheated again by going directly from [7, 4] to [4, 7], but that's really just:

// 1.Split the input array in half
//     [7, 4] -> [7], [4]

//   2.Both sides are sorted recursively:
//     [7] -> [7]
//     [4] -> [4]

//   3.Both halves are merged:
//     [7], [4] -> [4, 7]
// As you can see, all the work actually gets done in step 3, the merge step. Everything else is just splitting and recursing.

// Mergesort is an optimized sorting algorithm which is a common choice to implement sort methods in standard libraries as an alternative to quicksort or heapsort. (For example, Firefox's Array.sort method uses a tuned mergesort; the WebKit engine used by Chrome and Safari uses quicksort for numeric arrays, and mergesort for arrays of strings.)

// Code:

function mergeSort(arr) {
	let subList = [];
	for(let val of arr) {
		subList.push([val])
	}
	console.log('subList :', subList);
	var recurse = function(subL) {
		for(var i = 0; i < subL.length; i+=2) {
			let firstArr = subL[i];
			let secondArr = subL[i+1] || [];
			let merged = [];
			let firstLength = firstArr.length;
			let secondLength = secondArr.length;
			let currFirst = firstArr.shift();
			let currSecond = secondArr.shift();
			console.log(firstLength);
			console.log(secondLength);
			while(firstLength > 0 || secondLength > 0) {
				if(currSecond === undefined) {
					merged.push(currFirst);
				} else {
					if(currFirst > currSecond) {
						merged.push(currSecond);
						currSecond = secondArr.shift();
	          			secondLength--;
					} else {
						merged.push(currFirst);
						currFirst = firstArr.shift();
	          			firstLength--;
					}
				}
				console.log(merged)

			}
		}
	}

	recurse(subList);
}

mergeSort([4,7,4,3,9,1,2]);


mergeSort([4,7,4,3,9,1,2]);
