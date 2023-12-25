const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = {value:1, next:{value:2, next:{value:3, next:{value:4, next:{value:5: next:null}}}}} and k = 3,
 * the output should be {value:1, next:{value:2, next:{value:4, next:{value:5: next:null}}}}
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(linkNode, deleteValue) {
  let prevLink = linkNode;
  let currentLink = linkNode;
  let nextLink = linkNode.next;
  while (nextLink !== null) {
    if (currentLink.value === deleteValue) {
      prevLink.next = nextLink;
      currentLink = nextLink;
      nextLink = nextLink.next;
    } else {
      prevLink = currentLink;
      currentLink = nextLink;
      nextLink = nextLink.next;
    }
  }
  return linkNode;
}

module.exports = {
  removeKFromList,
};
