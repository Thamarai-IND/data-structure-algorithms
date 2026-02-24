
// Node class for Doubly Linked List
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// Doubly Linked List class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Append node at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // Prepend node at the beginning
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
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
    if (index === this.size) {
      this.append(value);
      return;
    }
    const newNode = new Node(value);
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;
    this.size++;
  }

  // Remove by value
  removeValue(value) {
    if (!this.head) return null;
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    if (!current) return null;

    if (current === this.head) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
    } else if (current === this.tail) {
      this.tail = current.prev;
      if (this.tail) this.tail.next = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.size--;
    return current.value;
  }

  // Remove at index
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      console.log("Index out of bounds");
      return null;
    }
    let current = this.head;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }
    if (current === this.head) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
    } else if (current === this.tail) {
      this.tail = current.prev;
      if (this.tail) this.tail.next = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
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
    return slow.value;
  }

  // Reverse the list
  reverse() {
    let current = this.head;
    let temp = null;
    this.tail = this.head;
    while (current) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp) {
      this.head = temp.prev;
    }
  }

  // Remove duplicates
  removeDuplicates() {
    if (!this.head) return;
    const seen = new Set();
    let current = this.head;
    while (current) {
      if (seen.has(current.value)) {
        if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.size--;
      } else {
        seen.add(current.value);
      }
      current = current.next;
    }
  }

  // Print forward
  printForward() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " <-> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  // Print backward
  printBackward() {
    let current = this.tail;
    let result = "";
    while (current) {
      result += current.value + " <-> ";
      current = current.prev;
    }
    result += "null";
    console.log(result);
  }

  // Get size
  getSize() {
    return this.size;
  }

  // Check if empty
  isEmpty() {
    return this.size === 0;
  }

  // Clear list
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Merge two sorted doubly linked lists
  static mergeSorted(list1, list2) {
    const dummy = new Node(0);
    let tail = dummy;
    let a = list1.head;
    let b = list2.head;

    while (a && b) {
      if (a.value <= b.value) {
        tail.next = a;
        a.prev = tail;
        a = a.next;
      } else {
        tail.next = b;
        b.prev = tail;
        b = b.next;
      }
      tail = tail.next;
    }

    if (a) {
      tail.next = a;
      a.prev = tail;
    } else if (b) {
      tail.next = b;
      b.prev = tail;
    }

    const mergedList = new DoublyLinkedList();
    mergedList.head = dummy.next;
    if (mergedList.head) mergedList.head.prev = null;

    // Find tail and size
    let current = mergedList.head;
    let count = 0;
    while (current) {
      mergedList.tail = current;
      count++;
      current = current.next;
    }
    mergedList.size = count;

    return mergedList;
  }

  // Split the list into two halves
  split() {
    if (!this.head || this.size < 2) return [this, null];

    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const secondHalf = new DoublyLinkedList();
    secondHalf.head = slow;
    secondHalf.tail = this.tail;

    // Disconnect first half
    if (slow.prev) {
      slow.prev.next = null;
      slow.prev = null;
    }

    // Recalculate sizes
    let current = this.head;
    let count1 = 0;
    while (current) {
      this.tail = current;
      count1++;
      current = current.next;
    }
    this.size = count1;

    let current2 = secondHalf.head;
    let count2 = 0;
    while (current2) {
      secondHalf.tail = current2;
      count2++;
      current2 = current2.next;
    }
    secondHalf.size = count2;

    return [this, secondHalf];
  }
}

// Demo: calling all methods including split
const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.append(4);
dll.append(5);
dll.append(6);

console.log("Original List:");
dll.printForward(); // 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 <-> null

const [firstHalf, secondHalf] = dll.split();
console.log("First Half:");
firstHalf.printForward(); // 1 <-> 2 <-> 3 <-> null
console.log("Second Half:");
secondHalf.printForward(); // 4 <-> 5 <-> 6 <-> null
