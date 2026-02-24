
// Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Singly Linked List class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Insert at the beginning
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  // Insert at a specific index
  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Index out of bounds");
      return;
    }
    if (index === 0) {
      this.prepend(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    let previous = null;
    let i = 0;
    while (i < index) {
      previous = current;
      current = current.next;
      i++;
    }
    newNode.next = current;
    previous.next = newNode;
    this.size++;
  }

  // Remove by value
  removeValue(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }

    let current = this.head;
    let previous = null;
    while (current && current.value !== value) {
      previous = current;
      current = current.next;
    }

    if (current) {
      previous.next = current.next;
      this.size--;
      return value;
    }
    return null;
  }

  // Remove at index
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index out of bounds");
      return null;
    }

    let current = this.head;
    if (index === 0) {
      this.head = current.next;
    } else {
      let previous = null;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.value;
  }

  // Search for a value
  search(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  // Get value at index
  getAt(index) {
    if (index < 0 || index >= this.size) return null;
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    return current.value;
  }

  // Find middle node
  findMiddle() {
    if (!this.head) return null;

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow.value; // Middle node value
  }

  // Reverse the linked list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  // Detect cycle using Floyd’s Cycle Detection Algorithm
  detectCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true; // cycle detected
      }
    }
    return false; // no cycle
  }

  // Remove duplicate nodes (unsorted list)
  removeDuplicates() {
    if (!this.head) return;

    const seen = new Set();
    let current = this.head;
    let previous = null;

    while (current) {
      if (seen.has(current.value)) {
        previous.next = current.next; // skip duplicate
        this.size--;
      } else {
        seen.add(current.value);
        previous = current;
      }
      current = current.next;
    }
  }

  // Print the list
  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  // Get size of the list
  getSize() {
    return this.size;
  }

  // Check if list is empty
  isEmpty() {
    return this.size === 0;
  }

  // Clear the list
  clear() {
    this.head = null;
    this.size = 0;
  }
}

// Demo: calling all methods
const list = new SinglyLinkedList();

console.log("Is empty?", list.isEmpty()); // true
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.insertAt(15, 2);
list.print(); // 5 -> 10 -> 15 -> 20 -> 30 -> null

console.log("Size:", list.getSize()); // 5
console.log("Search 20:", list.search(20)); // 3
console.log("Get at index 2:", list.getAt(2)); // 15
console.log("Middle Node:", list.findMiddle()); // 15 or 20 depending on length

list.removeValue(10);
list.print(); // 5 -> 15 -> 20 -> 30 -> null

list.removeAt(2);
list.print(); // 5 -> 15 -> 30 -> null

list.append(15);
list.append(30);
list.print(); // 5 -> 15 -> 30 -> 15 -> 30 -> null
list.removeDuplicates();
list.print(); // 5 -> 15 -> 30 -> null

list.reverse();
list.print(); // 30 -> 15 -> 5 -> null

console.log("Cycle detected?", list.detectCycle()); // false

list.clear();
console.log("Is empty after clear?", list.isEmpty()); // true


// Time Complexity: O(n) for append, removeValue, search, and findMiddle operations. O(1) for prepend and insertAt (when inserting at the beginning). O(n) for insertAt (when inserting at the end or middle). O(1) for removeAt (when removing the head). O(n) for removeAt (when removing from the end or middle).
// Space Complexity: O(n) for storing the nodes in the linked list, where n is the number of nodes in the list.

// description: A singly linked list is a linear data structure where each element (node) contains a value and a reference (pointer) to the next node in the sequence. It allows for efficient insertion and deletion of elements, as well as dynamic memory allocation. The linked list can be used to implement various data structures such as stacks, queues, and hash tables.
// example: The provided code defines a SinglyLinkedList class with methods for appending, prepending, inserting at a specific index, removing by value, removing at an index, searching for a value, getting a value at an index, finding the middle node, printing the list, getting the size of the list, checking if the list is empty, and clearing the list. The example usage demonstrates how to create a linked list, perform various operations on it, and print the results.
// advantages: Singly linked lists provide efficient insertion and deletion of elements without needing to shift other elements (as in arrays). They can grow or shrink dynamically as needed and do not require contiguous memory allocation.
// disadvantages: Singly linked lists have a higher memory overhead compared to arrays due to storing additional pointers. They also do not allow for direct access to elements by index, which can lead to slower search times (O(n)) compared to arrays (O(1)).
// use cases: Singly linked lists are commonly used in scenarios where dynamic memory allocation is required, such as in implementing stacks, queues, and hash tables. They are also useful for applications that require frequent insertion and deletion of elements, such as in real-time systems or when managing a list of tasks.

/** 
 * * step 1: Define a Node class to represent each node in the linked list, containing a value and a reference to the next node. Then, define a SinglyLinkedList class that contains methods for various operations such as appending, prepending, inserting at a specific index, removing by value, removing at an index, searching for a value, getting a value at an index, finding the middle node, printing the list, getting the size of the list, checking if the list is empty, and clearing the list.
 * step 2: Implement the append method to add a new node at the end of the list. If the list is empty, set the head to the new node. Otherwise, traverse the list to find the last node and set its next reference to the new node.
 * step 3: Implement the prepend method to add a new node at the beginning of the list. Set the new node's next reference to the current head and update the head to the new node.
 * step 4: Implement the insertAt method to add a new node at a specific index. Handle edge cases for inserting at the beginning or end of the list, and traverse the list to find the correct position for insertion.
 * step 5: Implement the removeValue method to remove a node by its value. Handle edge cases for removing the head and traverse the list to find the node with the specified value, updating references accordingly.
 * step 6: Implement the removeAt method to remove a node at a specific index. Handle edge cases for removing the head and traverse the list to find the correct position for removal, updating references accordingly.
 * step 7: Implement the search method to find the index of a node with a specific value by traversing the list and comparing values.
 * step 8: Implement the getAt method to retrieve the value of a node at a specific index by traversing the list to the desired position.
 * step 9: Implement the findMiddle method to find the middle node of the list using the slow and fast pointer technique, where the slow pointer moves one step at a time and the fast pointer moves two steps at a time.
 * step 10: Implement the print method to display the values of the nodes in the list in a readable format.
 * step 11: Implement the getSize method to return the number of nodes in the list, and the isEmpty method to check if the list is empty. Implement the clear method to reset the list to an empty state.
 * step 12: Test the implementation by creating a linked list, performing various operations, and printing the results to verify correctness.
 * step 13: Analyze the time and space complexity of each operation to understand the efficiency of the linked list implementation.
 * step 14: Summarize the advantages and disadvantages of using a singly linked list compared to other data structures, and discuss common use cases where a linked list is an appropriate choice.
 */