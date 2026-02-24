
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
}

// Demo: calling all methods
const dll1 = new DoublyLinkedList();
dll1.append(1);
dll1.append(3);
dll1.append(5);

const dll2 = new DoublyLinkedList();
dll2.append(2);
dll2.append(4);
dll2.append(6);

console.log("List 1:");
dll1.printForward();
console.log("List 2:");
dll2.printForward();

const merged = DoublyLinkedList.mergeSorted(dll1, dll2);
console.log("Merged Sorted Doubly Linked List:");
merged.printForward(); // 1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 <-> null
merged.printBackward(); // 6 <-> 5 <-> 4 <-> 3 <-> 2 <-> 1 <-> null


// Time Complexity: O(n + m) where n and m are the sizes of the two lists being merged. The space complexity is O(1) for the merging process, as we are reusing the existing nodes without creating new ones, but the overall space complexity is O(n + m) due to the new merged list that is created.
// Note: The mergeSorted method assumes that both input lists are already sorted in ascending order. If the lists are not sorted, the output will not be a correctly merged sorted list.
/** * step 1: Create a dummy node to serve as the starting point for the merged list and a tail pointer to keep track of the last node in the merged list. Initialize two pointers, a and b, to the heads of the two input lists.
 * step 2: Iterate through both lists simultaneously, comparing the values of the current nodes pointed to by a and b. Append the smaller value to the merged list and move the corresponding pointer (a or b) to the next node in its list. Update the tail pointer to point to the newly added node.
 * step 3: If one of the lists is exhausted before the other, append the remaining nodes of the non-exhausted list to the merged list.
 * step 4: After merging, create a new DoublyLinkedList instance for the merged list and set its head to dummy.next. Also, find the tail of the merged list and calculate its size by traversing through it.
 * step 5: Return the merged list, which will contain all nodes from both input lists in sorted order.
 * step 6: The time complexity of merging two sorted doubly linked lists is O(n + m) where n and m are the sizes of the two lists being merged, as we need to traverse both lists once. The space complexity is O(1) for the merging process, as we are reusing the existing nodes without creating new ones. However, if we consider the new merged list that is created, the overall space complexity is O(n + m) due to the new list containing all nodes from both input lists.
 * step 7: In summary, merging two sorted doubly linked lists involves iterating through both lists simultaneously, comparing node values, and building a new merged list by reusing existing nodes. The algorithm runs in linear time relative to the total number of nodes in both lists and has constant space complexity for the merging process, but the overall space complexity is linear due to the new merged list.
 * step 8: It is important to ensure that the input lists are sorted before calling the mergeSorted method, as it relies on this assumption to produce a correctly merged sorted list. If the input lists are not sorted, the output will not be a valid merged sorted list.
 */
