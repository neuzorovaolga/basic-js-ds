const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const listNode = { value, next: null };
    if (!this.head && !this.tail) {
      this.head = listNode;
      this.tail = listNode;
    } else {
      this.tail.next = listNode;
      this.tail = listNode;
    }
  }

  dequeue() {
    const result = this.head?.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return result;
  }
}

module.exports = {
  Queue,
};

// queue.enqueue(1); // adds the element to the queue { value: 1, next: null}
// const value3 = { value: 3, next: null };
// queue.enqueue(3); // adds the element to the queue { value: 1, next: value3}
// const value5 = { value: 5, next: null };
// value3.next = value5;
// queue.enqueue(5); // adds the element to the queue { value: 1, next: { value: 3, next: value5}}
// queue.enqueue(6); // adds the element to the queue
