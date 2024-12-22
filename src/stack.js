const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arr = [];
  }

  push(element) {
    this.arr.push(element);
  }

  pop() {
    const popped = this.arr.at(-1);
    this.arr = this.arr.slice(0, -1);
    return popped;
  }

  peek() {
    return this.arr.at(-1);
  }
}

module.exports = {
  Stack,
};
