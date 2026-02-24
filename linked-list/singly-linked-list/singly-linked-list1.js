
class singlyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = { value, next: null };
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = { value, next: null };
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            this.prepend(value);
            return;
        }
        if (index === this.length) {
            this.append(value);
            return;
        }
        const newNode = { value, next: null };
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index out of bounds');
        }
        if (index === 0) {
            this.head = this.head.next;
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return;
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        if (index === this.length - 1) {
            this.tail = current;
        }
        this.length--;
    }

    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        this.tail = current;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

const list = new singlyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.insert(2, 1.5);
list.print(); // 0 -> 1 -> 1.5 -> 2 -> 3
list.remove(2);
list.print(); // 0 -> 1 -> 2 -> 3
console.log(list.find(2)); // { value: 2, next: { value: 3, next: null } }
console.log(list.toArray()); // [ 0, 1, 2, 3 ]
list.reverse();
list.print(); // 3 -> 2 -> 1 -> 0
// Time Complexity: O(n) for append, prepend, insert, remove, find, toArray, reverse, and print operations in the worst case, where n is the number of nodes in the linked list. The average time complexity for these operations is O(1) for append and prepend, and O(n) for insert, remove, find, toArray, reverse, and print.
// Space Complexity: O(n) for storing the nodes in the linked list, where n is the number of nodes. Each node requires O(1) space, and the total space used is proportional to the number of nodes in the list.

// description: A singly linked list is a linear data structure that consists of nodes, where each node contains a value and a reference to the next node in the list. It allows for efficient insertion and deletion of elements, as well as traversal of the list. The singly linked list supports various operations such as appending, prepending, inserting at a specific index, removing an element, finding an element, converting to an array, reversing the list, and printing the list. It is a fundamental data structure used in many applications and can be implemented in various programming languages.
// example: The provided code demonstrates the implementation of a singly linked list in JavaScript. It includes methods for appending, prepending, inserting, removing, finding, converting to an array, reversing, and printing the list. The example usage shows how to create a linked list, perform various operations on it, and print the results.
// advantages: Singly linked lists allow for efficient insertion and deletion of elements, as they do not require shifting of elements like arrays. They also provide dynamic memory allocation, allowing the list to grow or shrink as needed without the need for resizing.
// disadvantages: Singly linked lists do not allow for efficient random access to elements, as they require traversal from the head to reach a specific index. They also consume more memory than arrays due to storing additional references for each node.
// use cases: Singly linked lists are commonly used in scenarios where frequent insertion and deletion of elements are required, such as in implementing stacks, queues, and other dynamic data structures. They are also useful in situations where the size of the list is unknown or can change frequently.

/** * step 1: Define a class for the singly linked list, which includes a constructor to initialize the head, tail, and length properties. The head and tail will point to the first and last nodes of the list, respectively, while the length will keep track of the number of nodes in the list.
 * step 2: Implement the append method to add a new node with a given value to the end of the list. This method will create a new node, update the next reference of the current tail, and set the new node as the new tail. It will also increment the length of the list.
 * step 3: Implement the prepend method to add a new node with a given value to the beginning of the list. This method will create a new node, set its next reference to the current head, and update the head to point to the new node. If the list was empty, it will also set the tail to point to the new node. It will increment the length of the list.
 * step 4: Implement the insert method to add a new node with a given value at a specific index in the list. This method will handle edge cases for inserting at the beginning or end of the list and will traverse to the appropriate position for insertion. It will update references
 * accordingly and increment the length of the list.
 * step 5: Implement the remove method to delete a node at a specific index in the list. This method will handle edge cases for removing the head or tail and will traverse to the appropriate position for removal. It will update references accordingly and decrement the length of the list.
 * step 6: Implement the find method to search for a node with a specific value in the list. This method will traverse through the list and return the node if found, or null if not found.
 * step 7: Implement the toArray method to convert the linked list into an array representation. This method will traverse through the list and push each node's value into an array, which will be returned at the end.
 * step 8: Implement the reverse method to reverse the order of nodes in the linked list. This method will use three pointers (prev, current, next) to reverse the direction of the next references while traversing through the list. It will also update the head and tail references accordingly.
 * step 9: Implement the print method to display the values of the nodes in the linked list in a readable format. This method will traverse through the list and collect the values into an array, which will then be printed as a string with arrows indicating the links between nodes.
 * step 10: Test the implementation by creating an instance of the singly linked list, performing various operations such as appending, prepending, inserting, removing, finding, converting to an array, reversing, and printing the list. Verify that the outputs are correct and that the linked list behaves as expected.
 * step 11: Analyze the time and space complexity of each operation in the singly linked list implementation. The time complexity for append and prepend is O(1), while insert, remove, find, toArray, reverse, and print have a time complexity of O(n) in the worst case. The space complexity is O(n) for storing the nodes in the linked list.
 * step 12: In summary, the singly linked list is a fundamental data structure that allows for efficient insertion and deletion of elements. It provides various methods for manipulating the list and can be used in a wide range of applications where dynamic data structures are needed.
 */

