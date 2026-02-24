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

  // Append node at the end
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

  // Merge two sorted linked lists
  static mergeSorted(list1, list2) {
    const dummy = new Node(0);
    let tail = dummy;

    let a = list1.head;
    let b = list2.head;

    while (a && b) {
      if (a.value <= b.value) {
        tail.next = a;
        a = a.next;
      } else {
        tail.next = b;
        b = b.next;
      }
      tail = tail.next;
    }

    // Attach remaining nodes
    tail.next = a ? a : b;

    // Build new list
    const mergedList = new SinglyLinkedList();
    mergedList.head = dummy.next;

    // Recalculate size
    let current = mergedList.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    mergedList.size = count;

    return mergedList;
  }
}

// Example usage:
const list1 = new SinglyLinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

const list2 = new SinglyLinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

console.log("List 1:");
list1.print(); // 1 -> 3 -> 5 -> null
console.log("List 2:");
list2.print(); // 2 -> 4 -> 6 -> null

const merged = SinglyLinkedList.mergeSorted(list1, list2);
console.log("Merged Sorted List:");
merged.print(); // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null

// Time Complexity: O(n + m) where n and m are the sizes of the two linked lists. We traverse each list once.
// Space Complexity: O(1) for the merging process, as we are reusing the existing nodes. However, the new merged list will have a size of n + m, so if we consider the output list, it would be O(n + m).

/** * step 1: Define a Node class to represent each node in the linked list, containing a value and a pointer to the next node. Define a SinglyLinkedList class to manage the linked list, including methods for appending nodes and printing the list.
 * step 2: Implement the mergeSorted static method in the SinglyLinkedList class, which takes two sorted linked lists as input and merges them into a single sorted linked list. Use a dummy node to simplify the merging process and maintain a tail pointer to build the merged list.
 * step 3: Iterate through both linked lists simultaneously, comparing the current nodes of each list. Append the smaller value to the merged list and move the corresponding pointer forward. Continue this process until one of the lists is fully traversed.
 * step 4: After one of the lists is fully traversed, append any remaining nodes from the other list to the merged list. This ensures that all nodes are included in the final merged list.
 * step 5: Create a new SinglyLinkedList instance for the merged list and set its head to the next node of the dummy node. Recalculate the size of the merged list by traversing it once.
 * step 6: Return the merged linked list. The time complexity of this algorithm is O(n + m) where n and m are the sizes of the two linked lists, as we traverse each list once. The space complexity is O(1) for the merging process, as we are reusing the existing nodes. However, if we consider the output list, it would be O(n + m) due to the new merged list containing all nodes from both lists.
 * step 7: In summary, the mergeSorted method efficiently merges two sorted linked lists into a single sorted linked list by iterating through both lists simultaneously and building the merged list using a dummy node. This approach ensures that the resulting list is sorted and contains all nodes from both input lists.
 */