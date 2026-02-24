
// Node structure
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert nodes (simple BST insert for demo)
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  // Traversals
  preorder(node = this.root) {
    if (!node) return;
    console.log(node.value);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  inorder(node = this.root) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.value);
    this.inorder(node.right);
  }

  postorder(node = this.root) {
    if (!node) return;
    this.postorder(node.left);
    this.postorder(node.right);
    console.log(node.value);
  }

  levelOrder() {
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length) {
      const node = queue.shift();
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
}

// Demo
const tree = new BinaryTree();
[10, 6, 15, 3, 8, 20].forEach(val => tree.insert(val));

console.log("Preorder Traversal:");
tree.preorder();

console.log("Inorder Traversal:");
tree.inorder();

console.log("Postorder Traversal:");
tree.postorder();

console.log("Level Order Traversal:");
tree.levelOrder();


// time complexity: O(n) for all traversals, where n is the number of nodes in the tree, as each node is visited once. The space complexity is O(h) for recursive traversals (preorder, inorder, postorder) where h is the height of the tree, and O(n) for level order traversal due to the queue storing nodes at each level.
// description: This code defines a simple binary tree data structure with methods for inserting values and performing various tree traversals (preorder, inorder, postorder, and level order). The insert method adds values to the tree in a way that maintains the binary search tree property. The traversal methods visit nodes in different orders, allowing for various ways to process the tree's data. The demo at the end shows how to create a binary tree, insert values, and perform each type of traversal while printing the node values.
/** * step 1: Define a Node class to represent each node in the binary tree, containing a value and pointers to the left and right child nodes. Define a BinaryTree class to manage the tree, including methods for inserting values and performing different types of traversals.
 * step 2: Implement the insert method in the BinaryTree class to add values to the tree while maintaining the binary search tree property. This involves comparing the value to be inserted with the current node's value and deciding whether to go left or right until an appropriate position is found.
 * step 3: Implement traversal methods (preorder, inorder, postorder) using recursion. Each method visits nodes in a specific order: preorder visits the current node before its children, inorder visits the left child, then the current node, and then the right child, while postorder visits the children before the current node.
 * step 4: Implement level order traversal using a queue to visit nodes level by level. This involves
 * starting with the root node in the queue, processing each node by printing its value and adding its children to the queue until all nodes have been processed.
 * step 5: Demonstrate the functionality of the BinaryTree class by creating an instance, inserting values, and performing each type of traversal while printing the node values to the console.
 * step 6: The time complexity of all traversals is O(n) where n is the number of nodes in the tree, as each node is visited once. The space complexity for recursive traversals (preorder, inorder, postorder) is O(h) where h is the height of the tree due to the call stack, while the space complexity for level order traversal is O(n) in the worst case when the tree is completely unbalanced and all nodes are at the same level.
 * step 7: In summary, this code provides a basic implementation of a binary tree with methods for inserting values and performing various traversals. It demonstrates how to manage the structure of the tree and how to visit nodes in different orders, which is fundamental for many applications in computer science such as searching, sorting, and organizing data.
 * step 8: When using this binary tree implementation, it is important to consider edge cases such as inserting duplicate values or handling an empty tree. Additionally, while this implementation uses a simple binary search tree structure, there are many variations of binary trees (e.g., balanced trees like AVL or Red-Black trees) that can provide better performance for certain operations, so it may be worth exploring those if your use case requires more efficient insertions or lookups.
 */