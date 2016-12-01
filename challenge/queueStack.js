// Link: https://challenge.makerpass.com/c/eff7242a9d25638a8d63931129143eb7

// Description:
// Write a stack. Once you’re done, implement a queue using two stacks. Do not create a storage array for your queue.

// Code:

var Stack = function() {
  var storage = [];

  this.push = function(val){
    storage.push(val);
  };

  this.pop = function(){
    return storage.pop();
  };

  this.size = function(){
    return storage.length;
  };
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val){
    inbox.push(val);
  };

  this.dequeue = function(){
    while(inbox.size() !== 0) outbox.push(inbox.pop());
    let remove = outbox.pop();
    while(outbox.size() !== 0) inbox.push(outbox.pop());
    return remove;
  };

  this.size = function(){
    return inbox.size();
  };
};
