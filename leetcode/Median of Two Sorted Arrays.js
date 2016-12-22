// 4. Median of Two Sorted Arrays
//
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

var findMedianSortedArrays = function(nums1, nums2) {
    let len = nums1.length + nums2.length;
    let median;

    if(len === 1) {
        nums1.length === 1 ? median = nums1[0] : median = nums2[0];
        return median;
    }
    let count = 0, ind1 = 0, ind2 = 0;
    if(nums1.length === 0 || nums2.length === 0) {
        if(len%2 !== 0) {
            if(nums1.length > 0) {
                while(count !== Math.round(len/2)) {
                    median = nums1[ind1];
                    ind1++;
                    count++;
                }
            } else {
                while(count !== Math.round(len/2)) {
                    median = nums2[ind2];
                    ind2++;
                    count++;
                }
            }
        } else {
            let firstNum, secondNum;
            if(nums1.length > 0) {
                while(count !== len/2) {
                    firstNum = nums1[ind1];
                    ind1++;
                    secondNum = nums1[ind1];
                    count++;
                }
            } else {
                while(count !== len/2) {
                    firstNum = nums2[ind2];
                    ind2++;
                    secondNum = nums2[ind2];
                    count++;
                }
            }
            median = (firstNum+secondNum)/2;
        }
    } else {
        if(len%2 !== 0) {
            while(count !== Math.round(len/2)) {
                if(!nums2[ind2] || nums1[ind1] <= nums2[ind2]) {
                    median = nums1[ind1];
                    ind1++;
                } else {
                    median = nums2[ind2];
                    ind2++;
                }
                count++;
            }
        } else {
            let firstNum, secondNum;
            while(count !== len/2) {
                if(nums2[ind2] === undefined || nums1[ind1] <= nums2[ind2]) {
                    firstNum = nums1[ind1];
                    ind1++;
                } else {
                    firstNum = nums2[ind2];
                    ind2++
                }
                count++;
            }
            if(!nums2[ind2] || nums1[ind1] <= nums2[ind2]) {
                secondNum = nums1[ind1];
            } else {
                secondNum = nums2[ind2];
            }
            median = (firstNum + secondNum)/2;
        }
    }
    return median;
};
