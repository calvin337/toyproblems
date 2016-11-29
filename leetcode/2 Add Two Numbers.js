// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8

var addTwoNumbers = function(l1, l2) {
    //loop through first linked list and build out the number

    var temp1 = l1;
    var num1 = 0;
    var digit1 = 1;
    while(temp1 !== null) {
        num1 += temp1.val*digit1;
        temp1 = temp1.next;
        digit1 = digit1*10;
    }

    var temp2 = l2
    var num2 = 0;
    var digit2 = 1;
    while(temp2 !== null) {
        num2+= temp2.val*digit2;
        temp2 = temp2.next;
        digit2 = digit2*10;
    }

    var digArr = (num1 + num2).toString().split('');
    console.log(digArr);
    var outNode = new ListNode(parseInt(digArr.pop()));
    var outPointer = outNode;
    while(digArr.length > 0) {
        outPointer.next = new ListNode(parseInt(digArr.pop()));
        outPointer = outPointer.next;
    }


    return outNode;
};
